import { Router } from "express";

import {
  getAuthors,
  getAuthorByID,
  createAuthor,
  updateAuthorByID,
  deleteAuthorByID,
} from "../controllers/authors.controller.js";

const router = Router();

router.get("/authors", getAuthors);

router.get("/authors/:id", getAuthorByID);

router.post("/authors", createAuthor);

router.put("/authors/:id", updateAuthorByID);

router.delete("/authors/:id", deleteAuthorByID);

export default router;
