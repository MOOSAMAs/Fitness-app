import mongoose from "mongoose"

export const dbConnection = ()=>{
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
        console.log('Database Connected Successfully.....');
    }).catch((err)=>{
        console.log('ERROR DB NOT FOUND !');
    })
}