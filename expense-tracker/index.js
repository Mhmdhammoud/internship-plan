const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDb = require('./lib/mongoose')
const expenseRouter = require('./routes/expense.routes')
const userRouter = require('./routes/user.routes')
const cors = require('cors')
dotenv.config()

const app = express()

//Cross-Origin Resource Sharing (CORS) is a security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser.
const options = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(options))
app.use(morgan('dev'))
app.use(express.json())
app.use('/user', userRouter)
app.use('/expense', expenseRouter)

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port: ${process.env.PORT}`)
  })
})
