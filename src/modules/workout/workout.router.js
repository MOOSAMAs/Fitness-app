import express from 'express'
import { allowedTo, protectedRoutes } from '../authentication/auth.controller.js'
import * as workout from './workout.controller.js'

const workoutRouter = express.Router()

workoutRouter.route('/')
.post(protectedRoutes ,allowedTo('admin' , 'trainer') ,workout.addWorkoutPlan)
.get(protectedRoutes ,allowedTo('admin' , 'trainer') ,workout.getAllWorkoutPlans)

workoutRouter.route('/:id')
.get(protectedRoutes ,allowedTo('admin' , 'trainer' , 'client') ,workout.getWorkoutPlan)
.put(protectedRoutes ,allowedTo('trainer' , 'admin') ,workout.updateWorkoutPlan)
.delete(protectedRoutes ,allowedTo('admin' , 'trainer') ,workout.deleteWorkoutPlan)

export default workoutRouter