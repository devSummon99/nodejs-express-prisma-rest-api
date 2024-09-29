import app from "../../app.js";
import request from "supertest";

import generarPalabrasAleatorias from "../../utils/words.js";

describe("POST /api-books/auth/login", () => {

    test("should response that the user does not exist", async () => {
        const response = await request(app).post("/api-books/auth/login").send({
            username: "miusuariodeprueba",
            email: "miusuariodeprueba@gmail.com",
            password: "12345678"
        })
        expect(response.statusCode).toBe(404) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response that the password is incorrect", async () => {
        const response = await request(app).post("/api-books/auth/login").send({
            email: "raulito88@gmail.com",
            password: "87465123",
        })
        expect(response.statusCode).toBe(401) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })
})

test("should response status code 200", async () => {
    const response = await request(app).post("/api-books/auth/login").send({
        email: "pedroperez31@cuba.cu",
        password: "72658466",
    })
    expect(response.statusCode).toBe(200);
})

test("should response with a JSON", async () => {
    const response = await request(app).post("/api-books/auth/login").send({
        email: "pedroperez31@cuba.cu",
        password: "72658466",
    })
    expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
})


describe("POST /api-books/auth/register", () => {

    test("should response that the user exist", async () => {
        const response = await request(app).post("/api-books/auth/register").send({
            username: "pedroperezllanes",
            email: "pedroperez31@cuba.cu",
            password: "72658466"
        })
        expect(response.statusCode).toBe(400) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

    test("should response registration successfully", async () => {

        const palabrasAleatorias = generarPalabrasAleatorias(1);
        const response = await request(app).post("/api-books/auth/register").send({
            username: `${palabrasAleatorias}`,
            email: `${palabrasAleatorias}23@gmail.com`,
            password: "72658466"
        })
        expect(response.statusCode).toBe(201) && expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    })

})