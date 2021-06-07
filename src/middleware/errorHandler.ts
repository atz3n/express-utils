import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";


export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction): void => {
    if (error instanceof CustomError) {
        response.status(error.statusCode).send({ errors: error.serializeErrors() });
        return;
    }

    response.status(400).send({
        errors: [{ message: "Something went wrong" }],
    });
};
