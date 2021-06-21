import { CustomError } from "./CustomError";
import { ErrorMessage } from "./errorTypes";

export class BadRequestError extends CustomError {
    statusCode = 400;
    public message: string;

    constructor(message?: string) {
        super("Bad Request");
        this.message = message ? message : "Bad Request";
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return [{ message: this.message }];
    }
}
