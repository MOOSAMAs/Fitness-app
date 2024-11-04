import express from 'express'
import { allowedTo, protectedRoutes } from '../authentication/auth.controller.js'
import * as diet from './diet.controller.js'

const dietRouter = express.Router()

dietRouter.route('/')
.post(protectedRoutes ,allowedTo('admin' , 'trainer') ,diet.addDietProgram)
.get(protectedRoutes ,allowedTo('admin' , 'trainer') ,diet.getAllPrograms)

dietRouter.route('/:id')
.get(protectedRoutes ,allowedTo('admin' , 'trainer' , 'client') ,diet.getClientProgram)
.put(protectedRoutes ,allowedTo('trainer' , 'admin') ,diet.updateProgram)
.delete(protectedRoutes ,allowedTo('admin' , 'trainer') ,diet.deleteProgram)

export default dietRouter