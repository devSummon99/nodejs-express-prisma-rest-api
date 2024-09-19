export class HttpException extends Error {
  message;
  errorCode;
  statusCode;
  errors;

  constructor(message, errorCode, statusCode, errors) {
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
    super(message);
  }
}

export const errorCodes = {
    USER_NOT_FOUND: 1001,
    USER_ALREADY_EXISTS: 1002,
INCORRECT_PASSWORD: 1003,
}
