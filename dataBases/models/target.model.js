import mongoose from "mongoose";

const targetSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:true
    },
    weight:Number,
    bodyFat:Number,
})

export const targetModel = mongoose.model('target' , targetSchema)