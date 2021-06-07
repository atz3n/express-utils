import { CustomError } from "./CustomError";
import { ErrorMessage } from "./errorTypes";

export class InternalError extends CustomError {
    statusCode = 500;

    constructor() {
        super("Internal Server Error");

        Object.setPrototypeOf(this, InternalError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return [{ message: "Internal Server Error" }];
    }
}
