const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDb = require('./lib/mongoose')
const expenseRouter = require('./routes/expense.routes')
const userRouter = require('./routes/user.routes')
dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/user', userRouter)
app.use('/expense', expenseRouter)

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port: ${process.env.PORT}`)
  })
})
