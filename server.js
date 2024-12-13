import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'
import { dbConnection } from './dataBases/config/dbConnection.js'
import { init } from './src/app.routes.js'

const port = 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
init(app)


dbConnection()
app.listen(process.env.PORT || port, "0.0.0.0" , () => console.log(`Example app listening on port ${process.env.PORT}!`))