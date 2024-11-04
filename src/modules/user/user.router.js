import express from 'express'
import * as user from './user.controller.js'
import { allowedTo, protectedRoutes } from '../authentication/auth.controller.js'

const userRouter = express.Router()

userRouter.route('/')
.post(user.addUser)
.get(protectedRoutes , allowedTo('admin') ,user.getAllUsers)

userRouter.route('/:id')
.get(protectedRoutes , allowedTo('admin') , user.oneUser)
.put(user.updateUser)
.delete(user.deleteUser)

export default userRouter