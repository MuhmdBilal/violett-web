const ErrorResponse = require('../Utils/errorResponse')
const errorHandler = (err,req,res,next)=>{
    let error = { ...err };
    error.message = err.message;
    //Log to console for dev
    console.log(err);

  //Mongoose bad ObjectId 
  if(err.name === "CastError"){
    const message = `user not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404)
  }
  // Mongoose Duplicate Key
  if(err.code === 11000){
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 403)
  }

 // Mongoose validation error 

 if(err.name === "ValidationError"){
    const message = Object.values(err.errors).map(val=> val.message);
    error = new ErrorResponse(message, 405)
 }


    res.status(err.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })
}

module.exports = errorHandler;