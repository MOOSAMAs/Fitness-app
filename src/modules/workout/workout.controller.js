import { clientModel } from "../../../dataBases/models/client.model.js";
import { trainerModel } from "../../../dataBases/models/trainer.model.js";
import { workOutModel } from "../../../dataBases/models/workout.model.js";
import { handleError } from "../../middleware/handleError.js";
import { messageError } from "../../utils/customError.js";
import * as workout from "../handlers/controller.handle.js";

const addWorkoutPlan = handleError(async(req , res , next)=>{
    const client = await clientModel.findById(req.body.client)
    if(!client){
        return next(new messageError('Please enroll with trainer first' , 404))
    }
    const trainer = await trainerModel.findById(req.body.trainer)
    if(!trainer){
        return next(new messageError('Trainer not found' , 404))
    }
    const result = new workOutModel(req.body)
    await result.save()
    res.status(200).json({message:'Workout plan added' , result})
})

const getWorkoutPlan = handleError(async(req , res , next)=>{
    const {id} = req.params
    const client = await clientModel.findById(req.body.client)
    if(!client){
        return next(new messageError('Please enroll with trainer first'))
    } 
    const program = await workOutModel.findById(id)
    !program && next(new messageError('You dont have any workout plans' , 404))
    program && res.status(200).json({message:'Your Workout:' , program})
})

const getAllWorkoutPlans = workout.getAllDocuments(workOutModel)

const updateWorkoutPlan = workout.updateDocument(workOutModel)

const deleteWorkoutPlan = workout.deleteDocument(workOutModel)


export {
    addWorkoutPlan,
    getAllWorkoutPlans,
    getWorkoutPlan,
    updateWorkoutPlan,
    deleteWorkoutPlan
}