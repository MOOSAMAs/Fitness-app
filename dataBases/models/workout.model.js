import mongoose from "mongoose";

const workOutSchema = new mongoose.Schema({
    client:{
        type:mongoose.Types.ObjectId,
        ref:'client',
        required:true
    },
    trainer:{
        type:mongoose.Types.ObjectId,
        ref:'trainer',
        required:true
    },
    exercises:[{
        name:String,
        sets:Number,
        reps:Number,
        restTime:Number
    }],
    duration:Number,
    startedAt:Date,
    endedAt:Date
},{
    timestamps:true
})

export const workOutModel = mongoose.model('workout' , workOutSchema)