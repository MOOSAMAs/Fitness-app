import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from "../../../dataBases/models/user.model.js"
import { handleError } from "../../middleware/handleError.js"
import { messageError } from "../../utils/customError.js"

const signUp = handleError(async(req , res , next)=>{
    let {email} = req.body
    const findUser = await userModel.findOne({email})
    if(findUser) return next(new messageError('This user already exist pls enter another email'))
    const result = new userModel(req.body)
    await result.save()
    res.status(200).json({message:'user added successfully' , result})
})

const signIn = handleError(async (req , res , next)=>{
    const {email , password} = req.body
    const findEmail = await userModel.findOne({email})
    const passMatch = await bcrypt.compare(password , findEmail.password)
    if(findEmail && passMatch) {
        const token = jwt.sign({email:findEmail.email , name:findEmail.name , role:findEmail.role , userId:findEmail._id} , process.env.SECRET_KEY_TOKEN)
        res.status(200).json({message:'Welcome back' , token})
    }
    next(new messageError('Email or password not match pls check and try again'))
})

const protectedRoutes = handleError(async(req , res , next)=>{
    let {token} = req.headers
    if(!token) return next(new messageError('This token not valid'))
    let decode = jwt.verify(token , process.env.SECRET_KEY_TOKEN)

    const user = await userModel.findById(decode.userId)
    if(!user) return next(new messageError('This token not valid'))
    if(user.passwordChangedAt > decode.iat) return next(new messageError('This token not valid'))
    req.user = user

    next()
})

const allowedTo = (...roles)=>{
    return handleError(async(req , res , next)=>{
        if(!roles.includes(req.user.role)){
            return next(new messageError('You not authorized to this point'))
        }
        next()
    })
}

export{
    signUp,
    signIn,
    protectedRoutes,
    allowedTo
}