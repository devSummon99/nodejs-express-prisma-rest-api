export const errorMiddleware = (error, req, res, next) => {
  console.log("error lai lai");
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });
};
