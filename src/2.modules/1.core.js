const http = require("http")
const path = require("path")

console.log(__dirname + path.join("/2.local.js"))

http.createServer(function(request, response){
     console.log(request.url)
    // console.log(request.headers.referer)
    if(request.url=='/'){
        response.end("Welcome to the world of NodeJS")
    } else if(request.url=='/user') {
        response.end("Here is your user data")
    } else if(request.url == "/employee") {
        response.end("Here is your employee data")
    } else {
        response.end("Please contact administrator")
    }
}).listen(3001)

