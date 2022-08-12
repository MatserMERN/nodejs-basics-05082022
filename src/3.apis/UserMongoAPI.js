import express, { response } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "./models/user.js";

const app = express()
const router = express.Router()
dotenv.config()
// This will help us to get the posted data from UI / postman
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/studentdb")
        .then(() => console.log("Connected to mongoDB successfully"))
        .catch(err => console.log(err))


router.get("/", (req, res) => {
    res.json("Welcome to user API using mongoDB")
})

router.get("/users", async (req, res) => {
    const users = await User.find()
    res.json(users)
})

router.post("/register", (req, res) => {
    const user = req.body
    const salt= parseInt(process.env.SALT)
    bcrypt.genSalt(salt, (err, salt) => {
        bcrypt.hash(user.password, salt, async (err, hash)=>{
            if(err){
                res.send(err).status(500)
            } else {
                const userObj = await new User({
                    username: user.username,
                    password: hash,
                    email: user.email
                }).save()
                res.json(userObj)
            }
        })
    })
})

router.post("/login", async (req, res) => {
    const user = req.body
    const userObj = await User.find({username: user.username})
    bcrypt.compare(user.password, userObj[0].password, (err, isValid) =>{
        if(err){
            res.send(err).status(404)
        } else {
            if(isValid === true){
                var token = jwt.sign({data: "some data"}, 'secret', { expiresIn: '1h' });
                res.json(token)
            } else {
                res.json("Invalid login ")
            }
        }
    })
})


app.use("/api", router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})