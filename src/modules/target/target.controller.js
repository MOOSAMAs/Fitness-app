import { targetModel } from "../../../dataBases/models/target.model.js";
import { handleError } from "../../middleware/handleError.js";
import * as handle from "../handlers/controller.handle.js";

const addTarget = handleError(async(req , res , next)=>{
    const result = new targetModel({
        user:req.user._id,
        weight:req.body.weight,
        bodyFat:req.body.bodyFat
    })
    await result.save()
    res.status(200).json({message:'target added' , result})
})

const allTargets = handle.getAllDocuments(targetModel)

const updateTarget = handle.updateDocument(targetModel)

const deleteTarget = handle.deleteDocument(targetModel)

export{
    addTarget,
    allTargets,
    updateTarget,
    deleteTarget
}