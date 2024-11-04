import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import { dbConnection } from './dataBases/config/dbConnection.js'
import { init } from './src/app.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
init(app)

dbConnection()
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))