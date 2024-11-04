import { trainerModel } from "../../../dataBases/models/trainer.model.js";
import { handleError } from "../../middleware/handleError.js";
import { messageError } from "../../utils/customError.js";
import * as handle from "../handlers/controller.handle.js";

const addTrainer = handleError(async(req , res , next)=>{
    const isExist = await trainerModel.findOne({user:req.user._id})
    if(isExist){
        return next(new messageError('Trainer Already Exist' , 404))
    }
    const result = new trainerModel({
        user:req.user._id,
        experienceYears:req.body.experienceYears,
        certificates:req.body.certificates,
        specialist:req.body.specialist
    })
    await result.save()
    res.status(200).json({message:'Trainer added' , result})
})

const getAllTrainers = handle.getAllDocuments(trainerModel)

const getOneTrainer = handle.getOneDocument(trainerModel)

const updateTrainer = handle.updateDocument(trainerModel)

const deleteTrainer = handle.deleteDocument(trainerModel)

export{
    addTrainer,
    updateTrainer,
    deleteTrainer,
    getAllTrainers,
    getOneTrainer
}