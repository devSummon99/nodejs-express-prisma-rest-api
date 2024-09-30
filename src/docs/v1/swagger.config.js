const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My first REST-API for a bookstore",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000",
            }
        ],
    },
    apis: [
        ".src/auth/routes/auth.routes.js",
        ".src/bookstore/routes/authors.routes.js",
        ".src/bookstore/routes/books.routes.js", 
        ".src/users/routes/users.routes.js"
    ],
};

export default options;