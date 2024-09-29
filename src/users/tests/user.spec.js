import app from "../../app.js"

describe("GET /api-books/users", () => {
    test("should response status code 200", async () => {
        const response = await request(app).post("/api-books/auth/login").send({
            email: "pedroperez31@cuba.cu",
            password: "72658466",
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("GET /api-books/users/:id", () => {
    test("should response status code 200", async () => {
        const response = await request(app).post("/api-books/auth/login").send({
            email: "pedroperez31@cuba.cu",
            password: "72658466",
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("POST /api-books/users", () => {
    test("should response status code 200", async () => {
        const response = await request(app).post("/api-books/auth/login").send({
            email: "pedroperez31@cuba.cu",
            password: "72658466",
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("PUT /api-books/users/:id", () => {
    test("should response status code 200", async () => {
        const response = await request(app).post("/api-books/auth/login").send({
            email: "pedroperez31@cuba.cu",
            password: "72658466",
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("DELETE /api-books/users/:id", () => {
    test("should response status code 200", async () => {
        const response = await request(app).post("/api-books/auth/login").send({
            email: "pedroperez31@cuba.cu",
            password: "72658466",
        })
        expect(response.statusCode).toBe(200);
    })
})