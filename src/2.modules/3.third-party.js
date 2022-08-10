const express = require("express")
const dotenv = require("dotenv")
const users = require("./users.json")

const app = express()
dotenv.config()

app.get("/", function(request, response){
    response.send("Welcome to the world of ExpressJS")
})

app.get("/user", function(request, response){
    response.json(users)
})

app.get("*", function(request, response){
    response.send("Please contact administrator")
})

const PORT = process.env.PORT || 4200

app.listen(PORT, function(){
    console.log(`Server Listening at PORT ${PORT}`)
})