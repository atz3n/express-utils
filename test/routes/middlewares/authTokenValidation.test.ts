import request from "supertest";
import { allowedAuthToken } from "../../setup";
import { app } from "./../../test-server/app";


it("successfully validates the auth token", async () => {
    const authToken = allowedAuthToken;

    const response = await request(app)
        .get("/validateAuthToken")
        .query({ authToken })
        .expect(200);

    expect(response.body.authToken).toEqual(authToken);
});


it("throws a not authorized error because of invalid auth token", async () => {
    const authToken = allowedAuthToken + " nope";

    await request(app)
        .get("/validateAuthToken")
        .query({ authToken })
        .expect(401);
});