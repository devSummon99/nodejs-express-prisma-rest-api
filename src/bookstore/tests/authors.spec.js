import app from "../../app.js";
import request from "supertest";

import generarPalabrasAleatorias from "../../utils/words.js";

describe("GET /api-books/authors", () => {

    test("should response status code 200", async () => {
        const response = await request(app).get("/api-books/authors/").send()
        expect(response.statusCode).toBe(200) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and don't exists any authors", async () => {
        const response = await request(app).get("/api-books/authors/").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("GET /api-books/authors/:id", () => {

    test("should response status code 200", async () => {
        const response = await request(app).get("/api-books/authors/1").send()
        expect(response.statusCode).toBe(200) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 404 and don't exists this authors", async () => {
        const response = await request(app).get("/api-books/authors/100").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("POST /api-books/authors", () => {

    test.skip("should response status code 201", async () => {
        const response = await request(app).post("/api-books/authors/").send({
            name: `${generarPalabrasAleatorias(1)}`
        })
        expect(response.statusCode).toBe(201) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 400", async () => {
        const response = await request(app).post("/api-books/authors/").send({
            name: "fidel"
        })
        expect(response.statusCode).toBe(400) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).post("/api-books/authors/").send({
            name: "fidel"
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("PUT /api-books/authors/:id", () => {

    test.skip("should response status code 203", async () => {
        const response = await request(app).put("/api-books/authors/7").send({
            name: `${generarPalabrasAleatorias(1)}`,
        })
        expect(response.statusCode).toBe(203) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and message don't exists this author", async () => {
        const response = await request(app).put("/api-books/authors/100").send({
            name: `${generarPalabrasAleatorias(1)}`,
        })
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).put("/api-books/authors/7").send({
            name: "fidel"
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("DELETE /api-books/authors/:id", () => {

    test.skip("should response status code 203", async () => {
        const response = await request(app).delete("/api-books/authors/7").send()
        expect(response.statusCode).toBe(203) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and message don't exists this author", async () => {
        const response = await request(app).delete("/api-books/authors/100").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).delete("/api-books/authors/7").send({
            name: "fidel"
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})