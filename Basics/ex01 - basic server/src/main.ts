import http = require('http')
import fs = require('fs')

http.createServer((request, response) => {
    console.log(`Request recieved:\n\ttype:\t${request.method}\n\turl:\t\'${request.url}\'`)
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('src/index.html').pipe(response)
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' })
        response.write("Error 404: Page not found!")
        response.end()
    }
}).listen(8000, () => { console.log("Server is listening...") })
