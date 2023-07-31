const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

const port = process.env.SERVER_PORT

app.use(express.json())
app.use('/api', require('./API/Users/Routers'))
app.use('/api', require('./API/Products/Routers'))

// How to connect Database
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log("DB Connected"))
//     .catch((err) => console.log("Found issues"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})