import app from "../../app.js";
import request from "supertest";

import generarPalabrasAleatorias from "../../utils/words.js";

describe("GET /api-books/v1/books", () => {

    test("should response status code 200", async () => {
        const response = await request(app).get("/api-books/v1/books/").send()
        expect(response.statusCode).toBe(200) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and don't exists any books", async () => {
        const response = await request(app).get("/api-books/v1/books/").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("GET /api-books/v1/books/:id", () => {

    test("should response status code 200", async () => {
        const response = await request(app).get("/api-books/v1/books/1").send()
        expect(response.statusCode).toBe(200) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 404 and don't exists this books", async () => {
        const response = await request(app).get("/api-books/v1/books/100").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("POST /api-books/v1/books", () => {

    test.skip("should response status code 201", async () => {
        const response = await request(app).post("/api-books/v1/books/").send({
           title: `${generarPalabrasAleatorias(1)}`,
           description:`${generarPalabrasAleatorias(2)}`,
           authorID :1
        })
        expect(response.statusCode).toBe(201) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 400", async () => {
        const response = await request(app).post("/api-books/v1/books/").send({
            title: "la edad de oro",
            description:`${generarPalabrasAleatorias(2)}`,
           authorID :3
        })
        expect(response.statusCode).toBe(400) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).post("/api-books/v1/books/").send({
            title: "la edad de oro",
            description:`${generarPalabrasAleatorias(2)}`,
           authorID :3
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("PUT /api-books/v1/books/:id", () => {

    test.skip("should response status code 203", async () => {
        const response = await request(app).put("/api-books/v1/books/3").send({
            description:`${generarPalabrasAleatorias(2)}`
        })
        expect(response.statusCode).toBe(203) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and message don't exists this book", async () => {
        const response = await request(app).put("/api-books/v1/books/100").send({
            description:`${generarPalabrasAleatorias(2)}`
        })
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).put("/api-books/v1/books/7").send({
            description:`${generarPalabrasAleatorias(2)}`
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("DELETE /api-books/v1/books/:id", () => {

    test.skip("should response status code 203", async () => {
        const response = await request(app).delete("/api-books/v1/books/7").send()
        expect(response.statusCode).toBe(203) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and message don't exists this author", async () => {
        const response = await request(app).delete("/api-books/v1/books/100").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).delete("/api-books/v1/books/7").send()
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})