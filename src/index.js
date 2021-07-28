const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan');

const router = require('./api/router')
const port = 3005
const config = require("./config");

mongoose.connect(config.databaseUrl, { useNewUrlParser: true,  useFindAndModify: false  })

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'));

app.use('/history', router)

app.listen(port, ()=>console.log(`history-service listens on port ${port}`))