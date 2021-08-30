import { HttpError } from "./HttpError";
import { ErrorMessage } from "./errorTypes";

export class BadRequestError extends HttpError {
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
