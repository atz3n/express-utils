import { HttpError } from "./HttpError";
import { ErrorMessage } from "./errorTypes";

export class TooManyRequestsError extends HttpError {
    statusCode = 429;

    constructor() {
        super("Too Many Requests");
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return [{ message: this.message }];
    }
}
