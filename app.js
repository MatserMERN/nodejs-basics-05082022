console.log("Welcome to the world of NodeJS")

var add = function(a, b){
    return a + b
}

console.log(add(20,30))

const getMessage = () => {
    return "Be the master of what you do !!!"
}

console.log(getMessage())

const names = ["Scott", "Adam", "Tuan"]

const [name1, name2, name3] = names
console.log(name1)
console.log(name2)
console.log(name3)

const user = {
    name: "Scott",
    city: "Boston",
    email: "scott@ef.com"
}
console.log(user)