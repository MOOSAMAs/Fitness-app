import mongoose from "mongoose"

const dietSchema = new mongoose.Schema({
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
    meals:[{
        name:String,
        calories:Number,
        protein:Number,
        carbs:Number,
        fats:Number
    }],
    caloriesTarget:Number
})

export const dietModel = mongoose.model('diet' , dietSchema)