import authRouter from "./modules/authentication/auth.router.js"
import clientRouter from "./modules/clients/client.router.js"
import dietRouter from "./modules/diet/diet.router.js"
import targetRouter from "./modules/target/target.router.js"
import trainerRouter from "./modules/trainer/trainer.router.js"
import userRouter from "./modules/user/user.router.js"
import workoutRouter from "./modules/workout/workout.router.js"
import { messageError } from "./utils/customError.js"
import { globalError } from "./utils/globalError.js"


export function init(app){
    
    app.use('/api/users', userRouter)
    app.use('/api' , authRouter)
    app.use('/api/trainer' , trainerRouter)
    app.use('/api/clients' , clientRouter)
    app.use('/api/target' , targetRouter)
    app.use('/api/dietprogram' , dietRouter)
    app.use('/api/workoutplans' , workoutRouter)
    
    app.all('*',(req, res, next) => {
        next(new messageError(`invalid url` + req.originalUrl, 404));
      });      
    app.use(globalError)
}