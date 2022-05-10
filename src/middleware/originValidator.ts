import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../errors/NotAuthorizedError";


export function validateOrigin(origins: string[]): (request: Request, response: Response, next: NextFunction) => void {
    return (request: Request, response: Response, next: NextFunction) => {
        const origin = request.headers.origin;

        if (origins.length !== 0 && (!origin || !origins.includes(origin))) {
            throw new NotAuthorizedError();
        }

        next();
    };
}