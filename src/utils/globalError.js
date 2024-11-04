
export const globalError = (err , req , res , next)=>{
    const code = err.statuscode || 500
    res.status(code).json({statuscode:err.statuscode , error: err.message , stack:err.stack})
}