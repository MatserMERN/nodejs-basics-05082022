//ES5 Module
// const user = require("./2.local")

// console.log(user)
// console.log(user.getName())
// console.log(user.getCity())

// Es6 Module
import {
    student as stu,
    getStudentName,
    getStudentEmail,
    API_URL
} from "./2.local.js"
console.log(stu)
console.log(getStudentName())
console.log(getStudentEmail())
console.log(API_URL)