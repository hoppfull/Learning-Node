import express = require('express')
import mongodb = require('mongodb')
import jwt = require('jsonwebtoken')
import bodyParser = require('body-parser')

const PRIVATE_KEY = 'mykey'
const PORT = 8000

const app = express()
const mongoClient = mongodb.MongoClient

app.use(bodyParser.json())

mongoClient.connect('mongodb://localhost:27017/ex01bankapp', (err, db) => {
    app.get('/login', function (req, res) {
        const loginData: ILogin = req.body
        db.collection('accounts')
            .find(loginData).limit(1)
            .next((err: mongodb.MongoError, account: IAccount) => {
                const response: ILoginResponse = account
                    ? { ok: true, balance: account.balance, token: jwt.sign(account, PRIVATE_KEY) }
                    : { ok: false, balance: null, token: null }
                res.write(JSON.stringify(response))
                res.end()
            })
    })

    app.get('/account', function (req, res) {
        const session: ISession = req.body
        const user: IAccount = jwt.verify(session.token, PRIVATE_KEY)
        db.collection('accounts')
            .find()
    })

    app.post('/register', function (req, res) {
        const registerData: IRegister = req.body

    })

    app.post('/deposit', function (req, res) {
        const session: ISession = req.body

    })

    app.post('/withdraw', function (req, res) {
        const session: ISession = req.body

    })
})

app.use(express.static('client/public')).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
