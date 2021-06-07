import express, { Request, Response } from "express";
import { body, query, validateRequest } from "../../../../src/index";


const router = express.Router();

router.get("/validateQuery",
    [
        query("text").notEmpty().withMessage("name required"),
        query("text").isString().withMessage("name must be a string")
    ],
    validateRequest,
    (request: Request, response: Response) => {
        const text = <string> request.query.text;

        response.send({ text });
    }
);

router.post("/validateBody",
    [
        body("text").notEmpty().withMessage("name required"),
        body("text").isString().withMessage("name must be a string")
    ],
    validateRequest,
    (request: Request, response: Response) => {
        const text = <string> request.body.text;

        response.send({ text });
    }
);


export { router as requestValidationRouter };
