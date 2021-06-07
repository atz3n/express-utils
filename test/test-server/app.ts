import { json } from "body-parser";
import express from "express";
import "express-async-errors";
import { errorHandler } from "../../src";
import { badRequestErrorRouter } from "./routes/errors/badRequestError";
import { internalErrorRouter } from "./routes/errors/internalError";
import { notAuthorizedErrorRouter } from "./routes/errors/notAuthorizedError";
import { notFoundErrorRouter } from "./routes/errors/notFoundError";
import { requestValidationRouter } from "./routes/middlewares/requestValidation";

export const app = express();

app.use(json());

app.use(requestValidationRouter);
app.use(badRequestErrorRouter);
app.use(internalErrorRouter);
app.use(notAuthorizedErrorRouter);
app.use(notFoundErrorRouter);

app.use(errorHandler); // must be called last