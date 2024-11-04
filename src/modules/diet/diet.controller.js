import { clientModel } from "../../../dataBases/models/client.model.js";
import { dietModel } from "../../../dataBases/models/dietDetails.model.js";
import { trainerModel } from "../../../dataBases/models/trainer.model.js";
import { handleError } from "../../middleware/handleError.js";
import { messageError } from "../../utils/customError.js";
import * as diet from "../handlers/controller.handle.js";

const addDietProgram = handleError(async(req , res , next)=>{
    const client = await clientModel.findById(req.body.client)
    if(!client){
        return next(new messageError('Please enroll with trainer first' , 404))
    }
    const trainer = await trainerModel.findById(req.body.trainer)
    if(!trainer){
        return next(new messageError('Trainer not found' , 404))
    }
    const result = new dietModel(req.body)
    await result.save()
    res.status(200).json({message:'Diet program added' , result})
})

const getClientProgram = handleError(async(req , res , next)=>{
    const {id} = req.params
    const client = await clientModel.findById(req.body.client)
    if(!client){
        return next(new messageError('Please enroll with trainer first'))
    } 
    const program = await dietModel.findById(id)
    !program && next(new messageError('You dont have any diet program yet' , 404))
    program && res.status(200).json({message:'Your program:' , program})
})

const getAllPrograms = diet.getAllDocuments(dietModel)

const updateProgram = diet.updateDocument(dietModel)

const deleteProgram = diet.deleteDocument(dietModel)


export {
    addDietProgram,
    getAllPrograms,
    getClientProgram,
    updateProgram,
    deleteProgram
}