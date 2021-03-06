import express, { Request, Response } from "express";
import { BadRequestError } from "../../../../src/index";


const router = express.Router();

router.get("/bad-request-error",
    (request: Request, response: Response) => {
        const text = <string | undefined> request.query.text;
        throw new BadRequestError(text);
    }
);

export { router as badRequestErrorRouter };
