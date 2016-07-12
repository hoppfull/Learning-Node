import data = require('./dataValidation')
import repo = require('./repository')
import request = require('./request')

import express = require('express')
import jwt = require('jsonwebtoken')
import bodyParser = require('body-parser')

const app = express()
const PORT = 8000

app.use(bodyParser.json())

app.use(express.static('client')).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

repo.connect('mongodb://localhost:27017/ex03bankapp')
    .then(db => {
        const findAccount = repo.retrieveAccount(db)
        type responseSig = (code: number, msg: string) => void
        const post = <T>(name: string, dataParser: (reqBody: {}) => T, handler: (data: T, res: responseSig) => void) =>
            app.post(name, (req, res) =>
                handler(dataParser(req.body), (code, msg) => {
                    res.statusCode = code
                    res.statusMessage = msg
                    res.end()
                }))

        post<ILogin>('/register', request.parseLogin, (credentials, response) => {
            if (credentials) {
                const {email, password} = credentials
                findAccount({ email }, (err, account) => {
                    if (!account) {
                        repo.createAccount(db, { email, password, balance: 0 })
                        response(201, "Account created")
                    } else response(409, "Account already exists")
                })
            } else response(401, "Invalid credentials")
        })
    }).catch(console.log)
