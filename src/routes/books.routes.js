import { Router } from "express";

import {
  getBooks,
  getBookByID,
  createBook,
  updateBookByID,
  deleteBookByID,
} from "../controllers/books.controller.js";

const router = Router();

router.get("/books", getBooks);

router.get("/books/:id", getBookByID);

router.post("books", createBook);

router.put("/books/:id", updateBookByID);

router.delete("/books/:id", deleteBookByID);

export default router;
