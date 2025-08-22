import request from "supertest";
import app from "../app";
import {expect} from "vitest";

describe("Plants CRUD", () => {
    it("GET plants -> array", async () => {
        const res = await request(app).get("/plants")
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body[0]).toHaveProperty("id");
        expect(res.body[0]).toHaveProperty("name");
    })
    it("POST /plants -> creates plant", async () => {
        const res = await request(app)
            .post("/plants")
            .send({ name: "TestPlant" })
            .set("Content-Type", "application/json");
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body).toMatchObject({ name: "TestPlant" });
    });
    it("GET /plants/:id -> object", async () => {
        const created = await request(app).post("/plants").send({name: "Test"})
        const id = created.body.id

        const res = await request(app).get(`/plants/${id}`);

        expect(res.status).toBe(200)
        expect(res.body).toMatchObject({id, name: "Test"})
    })

    it("PUT /plants/:id -> updated plant", async () => {
        const created = await request(app).put("/plants").send({name: "Test"})
        const id = created.body.id

        const res = await request(app).put(`/plants/${id}`).send({ name: "New" });
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({ id, name: "New" });
    })

    it("DELETE /plants/:id -> 204", async () => {
        const created = await request(app).post("/plants").send({ name: "ToDelete" });
        const id = created.body.id;

        const res = await request(app).delete(`/plants/${id}`);
        expect(res.status).toBe(204);
        expect(res.text).toBe(""); // No Content
    });

    it("GET /plants/:id (invalid) -> 400", async () => {
        const res = await request(app).get("/plants/abc");
        expect(res.status).toBe(400);
    });

    it("GET /plants/:id (not found) -> 404", async () => {
        const res = await request(app).get("/plants/999999");
        expect(res.status).toBe(404);
    });
})