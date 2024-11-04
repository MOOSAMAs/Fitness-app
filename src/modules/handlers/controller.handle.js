import { handleError } from "../../middleware/handleError.js";
import { messageError } from "../../utils/customError.js";


export const updateDocument = (model)=>{ 
    return handleError(async(req , res , next)=>{
    const {id} = req.params
    const result = await model.findByIdAndUpdate(id , req.body , {new:true})
    !result && next(new messageError('Document not found', 404));
    result && res.status(201).json({message:'document updated ' , result})
})
}

export const deleteDocument = (model)=>{
    return handleError(async(req , res , next)=>{
        const{id} = req.params
        const result = await model.findByIdAndDelete(id , req.body , {new:true})
        !result && next(new messageError('Document not found', 404));
        result && res.status(201).json({message:'deleted' , result})
})
}

export const getAllDocuments = (model)=>{
    return handleError(async(req , res , next)=>{
        const result = await model.find({})
        res.status(200).json({message:'all Documents' , result})
    })
}

export const getOneDocument = (model)=>{
    return handleError(async(req , res , next)=>{
        const {id} = req.params
        const result = await model.findById(id)
        !result && next(new messageError('Trainer not found' , 404)) 
        result && res.status(200).json({message:'one trainer' , result})
    })
}
