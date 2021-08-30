import { HttpError } from "./HttpError";
import { ErrorMessage } from "./errorTypes";

export class NotFoundError extends HttpError {
    statusCode = 404;
    public message: string;

    constructor(message?: string) {
        super("Not Found");
        this.message = message ? message : "Not Found";
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return [{ message: this.message }];
    }
}
