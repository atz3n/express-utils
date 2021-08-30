import { ErrorMessage } from "./errorTypes";

export abstract class HttpError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, HttpError.prototype);
    }

    abstract serializeErrors(): ErrorMessage[];
}
