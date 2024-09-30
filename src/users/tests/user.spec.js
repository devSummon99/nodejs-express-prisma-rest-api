import app from "../../app.js";
import request from "supertest";

import generarPalabrasAleatorias from "../../utils/words.js";

describe("GET /api-books/v1/users", () => {

    test("should response status code 200", async () => {
        const response = await request(app).get("/api-books/v1/users/").send()
        expect(response.statusCode).toBe(200) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and don't exists any users", async () => {
        const response = await request(app).get("/api-books/v1/users/").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("GET /api-books/v1/users/:id", () => {

    test("should response status code 200", async () => {
        const response = await request(app).get("/api-books/v1/users/1").send()
        expect(response.statusCode).toBe(200) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 404 and don't exists this users", async () => {
        const response = await request(app).get("/api-books/v1/users/100").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("POST /api-books/v1/users", () => {

    test.skip("should response status code 201", async () => {
        const response = await request(app).post("/api-books/v1/users/").send({
            username: `${generarPalabrasAleatorias(1)}`,
            email: `${generarPalabrasAleatorias(1)}@gmail.com`,
            password: "12345678"
        })
        expect(response.statusCode).toBe(201) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 400", async () => {
        const response = await request(app).post("/api-books/v1/users/").send({
            username: `micho`,
            email: "rm2333@cu.cu",
            password: "12345678"
        })
        expect(response.statusCode).toBe(400) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).post("/api-books/v1/users/").send({
            username: `micho`,
            email: "rm2333@cu.cu",
            password: "12345678"
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("PUT /api-books/v1/users/:id", () => {

    test.skip("should response status code 203", async () => {
        const response = await request(app).put("/api-books/v1/users/5").send({
              password: "12345679"
        })
        expect(response.statusCode).toBe(203) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and message don't exists this book", async () => {
        const response = await request(app).put("/api-books/v1/users/100").send({
            password: "12345679"
        })
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).put("/api-books/v1/users/8").send({
            password: "12345679"
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

describe("DELETE /api-books/v1/users/:id", () => {

    test.skip("should response status code 203", async () => {
        const response = await request(app).delete("/api-books/v1/users/8").send()
        expect(response.statusCode).toBe(203) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test.skip("should response status code 404 and message don't exists this author", async () => {
        const response = await request(app).delete("/api-books/v1/users/100").send()
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response status code 401", async () => {
        const response = await request(app).delete("/api-books/v1/users/8").send()
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})