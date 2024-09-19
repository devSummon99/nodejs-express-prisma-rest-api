export const  errorMiddleware = ( error, req, res, next) => {
 res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors:error.errors,
 });

}