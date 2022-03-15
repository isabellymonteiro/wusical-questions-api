const express = require('express')
const app = express()
const mongoose = require('mongoose')
const questionsRouter = require('./routes/questions')
const cors = require('cors')

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/questions', questionsRouter)

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.listen(process.env.PORT, () => console.log('Server started'))

