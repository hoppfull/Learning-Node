"use strict";
const express = require('express')
const mongodb = require('mongodb')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const PRIVATE_KEY = 'mykey'
const PORT = 8000
const DB_CONNECTION = 'mongodb://localhost:27017/ex02bankapp'

const app = express()
const mongoClient = mongodb.MongoClient

app.use(bodyParser.json())

mongoClient.connect(DB_CONNECTION, (err, db) => {
    app.post('/login', function (req, res) {
        // POST request for session token
        db.collection('accounts')
            .find({ email: req.body.email, password: req.body.password })
            .limit(1).next((err, account) => {
                res.write(JSON.stringify({
                    token: account ? jwt.sign(account, PRIVATE_KEY) : null
                }))
                res.end()
            })
    })

    app.post('/account', function (req, res) {
        // POST request for account data (requires session token)
        if (req.body.token) {
            const user = jwt.verify(req.body.token, PRIVATE_KEY)
            db.collection('accounts')
                .find({ email: user.email, password: user.password })
                .limit(1).next((err, account) => {
                    res.write(JSON.stringify({
                        balance: account ? account.balance : null
                    }))
                    res.end()
                })
        } else {
            res.write(JSON.stringify({ balance: null }))
            res.end()
        }
    })

    app.post('/register', function (req, res) {
        // POST request to create new account on server database
        db.collection('accounts')
            .find({ email: req.body.email })
            .limit(1).next((err, account) => {
                let success = false
                if (!account && emailIsValid(req.body.email) && passwordIsValid(req.body.password)) {
                    db.collection('accounts').insert({
                        email: req.body.email,
                        password: req.body.password,
                        balance: 0
                    })
                    success = true
                }
                res.write(JSON.stringify({ success }))
                res.end()
            })
    })

    app.post('/deposit', function (req, res) {
        // POST request to increase account.balance by given amount
        if (req.body.token && depositIsValid(req.body.amount)) {
            const user = jwt.verify(req.body.token, PRIVATE_KEY)
            db.collection('accounts')
                .update({
                    email: user.email,
                    password: user.password
                }, { $inc: { balance: req.body.amount } }, (err, result) => {
                    res.write(JSON.stringify({ success: true }))
                    res.end()
                })
        } else {
            res.write(JSON.stringify({ success: false }))
            res.end()
        }

    })

    app.post('/withdraw', function (req, res) {
        // POST request to decrease account.balance by given amount
        if (req.body.token && withdrawIsValid(req.body.amount)) {
            const user = jwt.verify(req.body.token, PRIVATE_KEY)
            db.collection('accounts')
                .update({
                    email: user.email,
                    password: user.password
                }, { $inc: { balance: -req.body.amount } }, (err, result) => {
                    res.write(JSON.stringify({ success: true }))
                    res.end()
                })
        } else {
            res.write(JSON.stringify({ success: false }))
            res.end()
        }
    })
})

app.use(express.static('client')).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

function emailIsValid(email) {
    return true
}

function passwordIsValid(password) {
    return true
}

function depositIsValid(amount) {
    return amount > 0
}

function withdrawIsValid(amount) {
    return amount > 0
}