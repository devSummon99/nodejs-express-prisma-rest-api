import { Router } from "express";

import {
  getBooks,
  getBookByID,
  createBook,
  updateBookByID,
  deleteBookByID,
} from "../controllers/books.controller.js";
import { adminMiddleware } from "../../middlewares/index.js";

const router = Router();

router.get("/books", getBooks);

router.get("/books/:id", getBookByID);

router.post("/books",adminMiddleware, createBook);

router.put("/books/:id",adminMiddleware, updateBookByID);

router.delete("/books/:id",adminMiddleware, deleteBookByID);

export default router;
