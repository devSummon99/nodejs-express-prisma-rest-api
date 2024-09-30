import  swaggerJSDoc  from "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express";

import options from "./v1/swagger.config.js";

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
    app.use("/api-books/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api-books/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api-books/v1/docs`
    );
};

export default swaggerDocs;