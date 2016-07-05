import express = require('express')

const PORT = 8000
const app = express()

app.use(express.static('client/public')).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
