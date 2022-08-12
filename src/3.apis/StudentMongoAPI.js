import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { Student } from "./models/student.js";
import cors from "cors"

const app = express()
const router = express.Router()
dotenv.config()
// This will help us to get the posted data from UI / postman
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:27017/studentdb", (err) =>{
//     if(err){
//         throw err
//     } else {
//         console.log(`Connected to mongoDB successfully`)
//     }
// })

mongoose.connect("mongodb://localhost:27017/studentdb")
        .then(() => console.log("Connected to mongoDB successfully"))
        .catch(err => console.log(err))


router.get("/", (req, res) => {
    res.json("Welcome to student API using mongoDB")
})

router.get("/students", async (req, res) => {
    const students = await Student.find()
    res.json(students)
})

router.post("/students", async (req, res) => {
    const student = req.body
    const studentObj = new Student(student)
    const output = await studentObj.save()
    res.json(output)
})

router.put("/students/:id", async (req, res) => {
    const _id = req.params.id
    const {name, email, city} = req.body
    const output = await Student.updateOne({_id}, { $set: {name, email, city}})
    res.json(output)
})

router.delete("/students/:id", async(req, res) => {
    const _id = req.params.id
    const output = await Student.deleteOne({_id})
    res.json(output)
})

app.use("/api", router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})