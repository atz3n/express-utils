import request from "supertest";
import { app } from "./../../test-server/app";


it("successfully validates a query parameter", async () => {
    const text  = "text send back from server";

    const response = await request(app)
        .get("/validate-query")
        .query({ text })
        .expect(200);

    expect(response.body.text).toEqual(text);
});


it("successfully validates a body parameter", async () => {
    const text  = "text send back from server";

    const response = await request(app)
        .post("/validate-body")
        .send({ text })
        .expect(200);

    expect(response.body.text).toEqual(text);
});


it("throws an error because of an invalid parameter", async () => {
    const texte  = "text send back from server";

    const response = await request(app)
        .post("/validate-body")
        .send({ texte })
        .expect(400);


    const errors = response.body.errors;
    expect(errors[0].message).toEqual("name required");
    expect(errors[0].field).toEqual("text");
    expect(errors[1].message).toEqual("name must be a string");
    expect(errors[1].field).toEqual("text");
});