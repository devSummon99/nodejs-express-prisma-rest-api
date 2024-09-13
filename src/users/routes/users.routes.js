import { Router } from "express";

import {
  getUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserByID);

router.post("/users", createUser);

router.put("/users/:id", updateUserByID);

router.delete("/users/:id", deleteUserByID);

export default router;
