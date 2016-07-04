import http = require('http')
import jwt = require('jsonwebtoken')

const PRIVATE_KEY = 'myprivatekey'

http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        const token = jwt.sign({ name: 'admin', password: 'root', age: 0 }, PRIVATE_KEY)
        response.write(`admin token: ${token}`)
        response.end()

        console.log(`admin token: ${token}`)
        const decodedToken: { name: string, password: string, age: number } = jwt.verify(token, PRIVATE_KEY)
        console.log(`username: ${decodedToken.name}`)
        console.log(`password: ${decodedToken.password}`)
        console.log(`age: ${decodedToken.age}`)
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' })
        response.write("Error 404: Page not found!")
        response.end()
    }
}).listen(8000)

// http://code.tutsplus.com/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543
