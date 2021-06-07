import express, { Request, Response } from "express";
import { InternalError } from "../../../../src/index";


const router = express.Router();

router.get("/internalError",
    (request: Request, response: Response) => {
        throw new InternalError();
    }
);

export { router as internalErrorRouter };
