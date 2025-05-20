import express, { Request, Response } from "express";
import { TooManyRequestsError } from "../../../../src/index";


const router = express.Router();

router.get("/too-many-requests-error",
    (request: Request, response: Response) => {
        throw new TooManyRequestsError();
    }
);

export { router as tooManyRequestsErrorRouter };
