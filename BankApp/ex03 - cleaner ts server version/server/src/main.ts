import data = require('./dataValidation')
import repo = require('./repository')

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

        app.post('/register', (req, res) => {
            const credentials = data.parseLoginCredentials(req.body)
            if (credentials) {
                const {email, password} = credentials
                findAccount({ email }, (err, account) => {
                    if (!account)
                        repo.createAccount(db, { email, password, balance: 0 })
                    else {

                    }
                })
            } else {

            }

        })
    }).catch(console.log)
