import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError";
import { ErrorMessage } from "./errorTypes";

export class RequestValidationError extends CustomError {
    public readonly errors: ValidationError[];

    statusCode = 400;

    constructor(errors: ValidationError[]) {
        super("Invalid Request Parameters");
        this.errors = errors;

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors(): ErrorMessage[] {
        return this.errors.map((err) => {
            return { message: err.msg, field: err.param };
        });
    }
}
