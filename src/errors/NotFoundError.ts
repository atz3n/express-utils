import { CustomError } from "./CustomError";
import { ErrorMessage } from "./errorTypes";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super("Not Found");

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return [{ message: "Not Found" }];
    }
}
