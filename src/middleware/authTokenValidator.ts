import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../errors/NotAuthorizedError";


export function validateAuthToken(allowedToken: string): (request: Request, response: Response, next: NextFunction) => void {
    return (request: Request, response: Response, next: NextFunction) => {
        const authToken = <string> request.query.authToken || "";

        if (authToken !== allowedToken) {
            throw new NotAuthorizedError();
        }

        next();
    };
}