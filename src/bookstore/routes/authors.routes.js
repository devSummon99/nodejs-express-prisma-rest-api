import { Router } from "express";

import {
  getAuthors,
  getAuthorByID,
  createAuthor,
  updateAuthorByID,
  deleteAuthorByID,
} from "../controllers/authors.controller.js";
import { adminMiddleware } from "../../middlewares/index.js";

const router = Router();

router.get("/authors", getAuthors);

router.get("/authors/:id", getAuthorByID);

router.post("/authors",adminMiddleware, createAuthor);

router.put("/authors/:id",adminMiddleware, updateAuthorByID);

router.delete("/authors/:id",adminMiddleware, deleteAuthorByID);

export default router;
