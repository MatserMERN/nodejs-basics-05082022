// var user = {
//     name: "Scott",
//     email: "Scott@ef.com",
//     city: "Boston"
// }

// user.getName = function(){
//     return this.name
// }

// module.exports = user
// // module.exports = 1
// // module.exports = "Hello"

// module.exports.getCity = function(){
//     return user.city
// }

// let student = {
//     id:1,
//     name: "Scott",
//     email: "Scott@ef.com",
//     isActive: true
// }

// export default student

export let student = {
    id:1,
    name: "Scott",
    email: "Scott@ef.com",
    isActive: true
}

export function getStudentName ()  {
    return student.name
}

export const getStudentEmail = () =>  student.email

export const API_URL = "https://reqres.in/api/users?page=2"