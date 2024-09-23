import { Router } from "express";

import {
  getUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "../controllers/users.controller.js";
import { authMiddleware, adminMiddleware } from "../../middlewares/index.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserByID);

router.post("/users",adminMiddleware, authMiddleware, createUser);

router.put("/users/:id", authMiddleware, updateUserByID);

router.delete("/users/:id",adminMiddleware, authMiddleware, deleteUserByID);

export default router;
