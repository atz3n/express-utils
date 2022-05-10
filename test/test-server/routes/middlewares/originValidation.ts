import express, { Request, Response } from "express";
import { validateOrigin } from "../../../../src/middleware/originValidator";
import { allowedOrigins } from "../../../config";


const router = express.Router();

router.get("/validate-origin",
    validateOrigin(allowedOrigins),
    (request: Request, response: Response) => {
        response.send();
    }
);


export { router as originValidationRouter };