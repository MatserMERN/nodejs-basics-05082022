import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { Student } from "./models/student.js";

const app = express()
const router = express.Router()
dotenv.config()

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

app.use("/", router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})