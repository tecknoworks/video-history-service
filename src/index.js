const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

const router = require('./api/router')
const port = 3005

mongoose.connect('mongodb://localhost:27017/history', { useNewUrlParser: true,  useFindAndModify: false  })

app.use(cors())
app.use(bodyParser.json())
app.use('/history', router)

app.listen(port, ()=>console.log(`history-service listens on port ${port}`))