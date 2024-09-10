import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connectDb } from './lib'
import { orderRouter, productsRouter, usersRouter } from './routes'

dotenv.config()
connectDb().then(() => {
    console.log('Server connect to DB')
    const app = express()
    app.use(cors())
    app.use(morgan('dev'))
    app.use(express.json())

    app.use('/product', productsRouter)
    app.use('/user', usersRouter)
    app.use('/order', orderRouter)

    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`)
    })
})
