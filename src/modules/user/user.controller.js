import { userModel } from "../../../dataBases/models/user.model.js";
import { handleError } from "../../middleware/handleError.js";
import { messageError } from "../../utils/customError.js";
import * as handle from "../handlers/controller.handle.js";


const addUser = handleError(async(req , res , next)=>{
    let {email} = req.body
    const findUser = await userModel.findOne({email})
    if(findUser) return next(new messageError('This user already exist pls enter another email' , 400))
    const result = new userModel(req.body)
    await result.save()
    res.status(200).json({message:'user added successfully' , result})
})

const oneUser = handle.getOneDocument(userModel)

const getAllUsers = handle.getAllDocuments(userModel)

const updateUser = handleError(async (req , res , next)=>{
    const {id} = req.params
    req.body.passwordChangedAt = Date.now()
    const result = await userModel.findByIdAndUpdate(id , req.body , {new:true})
    !result && next(new messageError('User not found' , 400))
    result && res.status(200).json({message:'Updated successfully' , result})
})

const deleteUser = handle.deleteDocument(userModel)

export{
    addUser,
    deleteUser,
    getAllUsers,
    updateUser,
    oneUser
}