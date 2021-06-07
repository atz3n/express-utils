import express, { Request, Response } from "express";
import { NotFoundError } from "../../../../src/index";


const router = express.Router();

router.get("/notFoundError",
    (request: Request, response: Response) => {
        throw new NotFoundError();
    }
);

export { router as notFoundErrorRouter };
