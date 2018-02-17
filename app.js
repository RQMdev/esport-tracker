const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/esport-tracker')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', require('./routes/users'))
app.use('/events', require('./routes/events'))
app.use('/places', require('./routes/places'))

// Start Server
const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server listening at ${port}`)
