import request from "supertest";
import { allowedOrigins } from "../../config";
import { app } from "../../test-server/app";


it("Should successfully validate an origin", async () => {
    await request(app)
        .get("/validate-origin")
        .set("Origin", allowedOrigins[0])
        .expect(200);

    await request(app)
        .get("/validate-origin")
        .set("Origin", allowedOrigins[1])
        .expect(200);
});


it("Should throws a not authorized error in case of an invalid origin", async () => {
    await request(app)
        .get("/validate-origin")
        .set("Origin", "an-invalid-origin")
        .expect(401);
});