import express = require('express')
// import mongodb = require('mongodb')
import bodyParser = require('body-parser')
// import jwt = require('jsonwebtoken')

// const PRIVATE_KEY = 'myprivatekey'
const PORT = 8000

const app = express()
// const mongoClient = mongodb.MongoClient;


app.use(bodyParser.json())

app.post('/login', function (req, res) {
    console.log(req.body.y)
    res.write("hello from server!")
    res.end()
})

// mongoClient.connect('mongodb://localhost:27017/ex01ticketapp', (err, db) => {

// })

app.use(express.static('client/public')).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})