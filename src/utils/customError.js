
export class messageError extends Error {
    constructor(message , statuscode){
        super(message),
        this.statuscode = statuscode
    }
}