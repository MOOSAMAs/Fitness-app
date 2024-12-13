import mongoose from "mongoose"

export const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://mohamed178:Mohamed@cluster0.dbycv4m.mongodb.net/Fitness-App").then(()=>{
        console.log('Database Connected Successfully.....');
    }).catch((err)=>{
        console.log('ERROR DB NOT FOUND !');
    })
}