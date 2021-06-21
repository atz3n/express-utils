import express, { Request, Response } from "express";
import { NotAuthorizedError } from "../../../../src/index";


const router = express.Router();

router.get("/not-authorized-error",
    (request: Request, response: Response) => {
        throw new NotAuthorizedError();
    }
);

export { router as notAuthorizedErrorRouter };
