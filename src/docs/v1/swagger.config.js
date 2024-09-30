const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My first REST-API for a bookstore",
            version: "1.0.0"
        },
    },
    apis: [
        ".src/auth/routes/auth.routes.js",
        ".src/auth/controllers/auth.controller.js",
        ".src/bookstore/routes/authors.routes.js",
        ".src/bookstore/routes/books.routes.js",
        ".src/bookstore/controllers/authors.controller.js",
        ".src/bookstore/controllers/books.controller.js",
        ".src/users/routes/users.routes.js",
        ".src/users/controllers/users.controller.js"
    ]
}

export default options;