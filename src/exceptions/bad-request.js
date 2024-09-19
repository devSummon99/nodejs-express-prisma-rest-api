import { HttpException } from "./root.js";

export class BadRequestsException extends HttpException {

    constructor(message, errorCode) {
        super(message, errorCode, 400, null);
    }
}
