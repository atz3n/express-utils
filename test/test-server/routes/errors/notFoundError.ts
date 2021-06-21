import express, { Request, Response } from "express";
import { NotFoundError } from "../../../../src/index";


const router = express.Router();

router.get("/notFoundError",
    (request: Request, response: Response) => {
        const text = <string | undefined> request.query.text;
        throw new NotFoundError(text);
    }
);

export { router as notFoundErrorRouter };
