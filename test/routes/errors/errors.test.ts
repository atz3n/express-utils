import request from "supertest";
import { app } from "./../../test-server/app";


it("Should return a bad request error", async () => {
    const text  = "text thrown by bad request error";

    const response = await request(app)
        .get("/bad-request-error")
        .query({ text })
        .expect(400);

    expect(response.body.errors[0].message).toEqual(text);
});


it("Should return a bad request error with default message", async () => {
    const response = await request(app)
        .get("/bad-request-error")
        .expect(400);

    expect(response.body.errors[0].message).toEqual("Bad Request");
});


it("Should return an internal server error", async () => {
    const response = await request(app)
        .get("/internal-error")
        .expect(500);

    expect(response.body.errors[0].message).toEqual("Internal Server Error");
});


it("Should return a not authorized error", async () => {
    const response = await request(app)
        .get("/not-authorized-error")
        .expect(401);

    expect(response.body.errors[0].message).toEqual("Not Authorized");
});


it("Should return a not found error", async () => {
    const text  = "text thrown by not found error";

    const response = await request(app)
        .get("/not-found-error")
        .query({ text })
        .expect(404);

    expect(response.body.errors[0].message).toEqual(text);
});


it("Should return a not found error with default message", async () => {
    const response = await request(app)
        .get("/not-found-error")
        .expect(404);

    expect(response.body.errors[0].message).toEqual("Not Found");
});