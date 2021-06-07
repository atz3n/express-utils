import { CustomError } from "./CustomError";
import { ErrorMessage } from "./errorTypes";

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return [{ message: this.message }];
    }
}
