import { Router } from "express";

import {
  getRoles,
  getRoleByID,
  createRole,
  updateRoleByID,
  deleteRoleByID,
} from "../controllers/roles.controller.js";

const router = Router();

router.get("/roles", getRoles);

router.get("/roles/:id", getRoleByID);

router.post("/roles", createRole);

router.put("/roles/:id", updateRoleByID);

router.delete("/roles/:id", deleteRoleByID);

export default router;
