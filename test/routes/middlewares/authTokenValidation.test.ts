import request from "supertest";
import { allowedAuthToken } from "../../config";
import { app } from "./../../test-server/app";


it("Should successfully validate the auth token", async () => {
    const authToken = allowedAuthToken;

    const response = await request(app)
        .get("/validate-auth-token")
        .query({ authToken })
        .expect(200);

    expect(response.body.authToken).toEqual(authToken);
});


it("Should throw a not authorized error in case of an invalid auth token", async () => {
    const authToken = allowedAuthToken + " nope";

    await request(app)
        .get("/validate-auth-token")
        .query({ authToken })
        .expect(401);
});