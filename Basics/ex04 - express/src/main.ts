import express = require('express')

const app = express()
const PORT = 8000

app.use(express.static('public'))

app.get('/tjosan', (req, res) => {
    res.send("alert from server! omg!")
})

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
