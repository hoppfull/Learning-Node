import express = require('express')
import mongodb = require('mongodb')
import bodyParser = require('body-parser')
import jwt = require('jsonwebtoken')

const PRIVATE_KEY = 'myprivatekey'
const PORT = 8000

const app = express()
const mongoClient = mongodb.MongoClient


app.use(bodyParser.json())


mongoClient.connect('mongodb://localhost:27017/ex01ticketapp', (err, db) => {
    app.post('/login', function (req, res) {
        const data: ILoginData = req.body

        db.collection('users')
            .find({ email: data.email, password: data.password })
            .limit(1).next((err: mongodb.MongoError, user: IUser) => {
                const response: ILoginResponse = user
                    ? { ok: true, token: jwt.sign(user, PRIVATE_KEY) }
                    : { ok: false, token: null }
                res.write(JSON.stringify(response))
                res.end()
            })
    })
})

app.use(express.static('client/public')).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

interface ILoginData {
    email: string
    password: string
}

interface ILoginResponse {
    ok: boolean
    token: string
}

interface IUser {
    _id: string
    email: string
    password: string
}
