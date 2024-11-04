import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    trainer:{
        type:mongoose.Types.ObjectId,
        ref:'trainer'
    },
    client:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    sessionDate:{
        type:Date,
        required:true
    },
    sessionType:{
        type:String,
        required:true
    },
    notes: String
},{
    timestamps:true
})

const scheduleModel = mongoose.model('schedule' , scheduleSchema)