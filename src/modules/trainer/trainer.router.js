import express from 'express'
import * as trainer from './trainer.controller.js'
import { allowedTo, protectedRoutes } from '../authentication/auth.controller.js'

const trainerRouter = express.Router()

trainerRouter.route('/')
.post(protectedRoutes ,allowedTo('trainer' , 'admin') ,trainer.addTrainer)
.get(protectedRoutes ,allowedTo('admin' , ' client' , 'trainer') ,trainer.getAllTrainers)

trainerRouter.route('/:id')
.get(protectedRoutes ,allowedTo('admin') ,trainer.getOneTrainer)
.put(protectedRoutes ,allowedTo('trainer' , 'admin') ,trainer.updateTrainer)
.delete(protectedRoutes ,allowedTo('admin') ,trainer.deleteTrainer)

export default trainerRouter