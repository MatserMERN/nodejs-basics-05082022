// console.log(process.pid)
// console.log(process.execPath)
// console.log(process.cwd())
// console.log(process.env.USERNAME)
// console.log(process.env.USERDOMAIN)
// console.log(process.env.USERPROFILE)

 const dotenv = require("dotenv")
//import dotenv from "dotenv"
dotenv.config()

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.SECRET_KEY)
console.log(process.env.API_URL)