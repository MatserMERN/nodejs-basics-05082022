import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import products from "./products.json" assert { type: 'json' }

const app = express()
dotenv.config()

app.use(cors())


app.get("/", (req, res) => {
    res.json("Welcome to the fake Product API")
})

app.get("/products", (req, res) => {
   res.json(products)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})