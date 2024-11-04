import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:true
    },
    experienceYears:Number,
    certificates:[String],
    specialist:[String]
},{
    timestamps:true,
    toJSON: { virtuals: true },
    toObject:{ virtuals: true }
})

trainerSchema.virtual('myClients' , {
    ref:'client',
    localField:'_id',
    foreignField:'trainer'
})

trainerSchema.pre(/^find/, function () {
    this.populate('myClients')
})

trainerSchema.pre(/^find/, function() {
    this.populate('user', 'name email')
})

export const trainerModel = mongoose.model('trainer' , trainerSchema)