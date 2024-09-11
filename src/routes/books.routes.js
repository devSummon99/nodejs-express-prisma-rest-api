import { Router } from "express";

import {
  getBooks,
  getBookByID,
  createBook,
  updateBookByID,
  deleteBookByID,
} from "../controllers/books.controller.js";

const router = Router();

router.get("/Books", getBooks);

router.get("/Books/:id", getBookByID);

router.post("/Books", createBook);

router.put("/Books/:id", updateBookByID);

router.delete("/Books/:id", deleteBookByID);

export default router;
