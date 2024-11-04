import express from 'express'
import { allowedTo, protectedRoutes } from '../authentication/auth.controller.js'
import * as target from './target.controller.js'

const targetRouter = express.Router()

targetRouter.route('/')
.post(protectedRoutes ,allowedTo('client' , 'admin') ,target.addTarget)
.get(protectedRoutes ,allowedTo('admin' , 'trainer') ,target.allTargets)

targetRouter.route('/:id')
// .get(protectedRoutes ,allowedTo('admin' , 'trainer') ,client.getSpecificClient)
.put(protectedRoutes ,allowedTo('trainer' , 'admin') ,target.updateTarget)
.delete(protectedRoutes ,allowedTo('admin') ,target.deleteTarget)

export default targetRouter