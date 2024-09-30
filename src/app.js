import express from "express";
import morgan from "morgan";

import authorsRoutes from "./bookstore/routes/authors.routes.js"
import booksRoutes from "./bookstore/routes/books.routes.js";
import authRoutes from "./auth/routes/auth.routes.js";
import usersRoutes from "./users/routes/users.routes.js";

import swaggerDocs from "./docs/swagger.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api-books/v1/", authorsRoutes);

app.use("/api-books/v1/", booksRoutes);


app.use("/api-books/v1/", usersRoutes);

app.use("/api-books/v1/", authRoutes);

swaggerDocs(app, process.env.PORT)

export default app;