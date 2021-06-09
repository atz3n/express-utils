import express, { Request, Response } from "express";
import { query, validateRequest } from "../../../../src/index";
import { validateAuthToken } from "../../../../src/middleware/authTokenValidation";
import { allowedAuthToken } from "../../../setup";


const router = express.Router();

router.get("/validateAuthToken",
    [
        query("authToken").notEmpty().withMessage("authToken required"),
        query("authToken").isString().withMessage("authToken must be a string")
    ],
    validateRequest,
    validateAuthToken(allowedAuthToken),
    (request: Request, response: Response) => {
        const authToken = <string> request.query.authToken;

        response.send({ authToken });
    }
);


export { router as authTokenValidationRouter };
