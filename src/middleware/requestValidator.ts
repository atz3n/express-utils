import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/RequestValidationError";


export function validateRequest(request: Request, response: Response, next: NextFunction): void {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

    next();
}