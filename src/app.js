import express from "express";
import authorsRoutes from "./routes/authors.routes.js";
import bookssRoutes from "./routes/books.routes.js";
import morgan from "morgan";

export const app = express();

app.use(express.json());
app.use(morgan("dev"))

app.use("/api-books", authorsRoutes);

app.use("/api-books", bookssRoutes);