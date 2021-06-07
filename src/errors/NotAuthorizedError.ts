import { CustomError } from "./CustomError";
import { ErrorMessage } from "./errorTypes";

export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor() {
        super("Not Authorized");

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return [{ message: "Not Authorized" }];
    }
}
