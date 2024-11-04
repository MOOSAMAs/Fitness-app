import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    passwordChangedAt:Date,
    role:{
        type:String,
        enum:['client' , 'trainer' , 'admin'],
        default:'client'
    },
    age:Number,
    height:Number,
    weight:Number,
    goal:{
        type:String,
        enum:['lose_weight', 'gain_muscle', 'maintain_fitness']
    },
    activate:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

userSchema.pre('save' , function () {
    this.password = bcrypt.hashSync(this.password , 8)
})

userSchema.pre('findOneAndUpdate' , function(){
    if(this._update.password) this._update.password = bcrypt.hashSync(this._update.password , 8)
})

export const userModel = mongoose.model('user' , userSchema)