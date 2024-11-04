import express from 'express'
import { allowedTo, protectedRoutes } from '../authentication/auth.controller.js'
import * as client from './client.controller.js'

const clientRouter = express.Router()

clientRouter.route('/')
.post(protectedRoutes ,allowedTo('client' , 'admin') ,client.addClient)
.get(protectedRoutes ,allowedTo('admin' , 'trainer') ,client.getAllClients)

clientRouter.route('/:id')
.get(protectedRoutes ,allowedTo('admin' , 'trainer') ,client.getSpecificClient)
.put(protectedRoutes ,allowedTo('client' , 'trainer' , 'admin') ,client.updateClient)
.delete(protectedRoutes ,allowedTo('admin') ,client.deleteClient)

export default clientRouter