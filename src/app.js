import express from "express";
import authorsRoutes from "./bookstore/routes/authors.routes.js"
import booksRoutes from "./bookstore/routes/books.routes.js";
import authRoutes from "./auth/routes/auth.routes.js";
import usersRoutes from "./users/routes/users.routes.js";
import morgan from "morgan";
export const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api-books", authorsRoutes);

app.use("/api-books", booksRoutes);


app.use("/api-books", usersRoutes);

app.use("/api-books", authRoutes);