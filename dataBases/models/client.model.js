import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required: true
    },
    trainer:{
        type:mongoose.Types.ObjectId,
        ref:'trainer',
        required: true
    }
},{
    timestamps:true
})

clientSchema.pre(/^find/, function() {
    this.populate('user' , '-_id name email')
})



export const clientModel = mongoose.model('client' , clientSchema)