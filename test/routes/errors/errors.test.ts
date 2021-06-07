import request from "supertest";
import { app } from "./../../test-server/app";


it("returns a bad request error", async () => {
    const text  = "text thrown by bad request error";

    const response = await request(app)
        .get("/badRequestError")
        .query({ text })
        .expect(400);

    expect(response.body.errors[0].message).toEqual(text);
});


it("returns an internal server error", async () => {
    const response = await request(app)
        .get("/internalError")
        .expect(500);

    expect(response.body.errors[0].message).toEqual("Internal Server Error");
});


it("returns a not authorized error", async () => {
    const response = await request(app)
        .get("/notAuthorizedError")
        .expect(401);

    expect(response.body.errors[0].message).toEqual("Not Authorized");
});


it("returns a not found error", async () => {
    const response = await request(app)
        .get("/notFoundError")
        .expect(404);

    expect(response.body.errors[0].message).toEqual("Not Found");
});