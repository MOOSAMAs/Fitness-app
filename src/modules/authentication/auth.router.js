import express from 'express'
import * as auth from './auth.controller.js'

const authRouter = express.Router()

authRouter.route('/signup')
.post(auth.signUp)

authRouter.route('/signin')
.post(auth.signIn)


export default authRouter