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

/**
 * @openapi
 * @swagger
 * components:
 * schemas:
 *   User:
 *     type: object
 *     properties:
 *             id:
 *               type: integer
 *               description: the user id 
 *             username:
 *               type: string 
 *               description: the username
 *             email:
 *               type: string 
 *               description: the user email
 *             password: 
 *              type: string 
 *              description: the user password
 *             createAt:
 *              type: string
 *              description: the create user date
 *             updateAt:
 *              type: string
 *              description: the create user update
 *             roles:
 *               type: string
 *               description: the user roles
 *     required:
 *       - username
 *       - email 
 *      - password    
 *     example:     
 *      username:pedro
 *      email:pedro@gmail.com
 *      password:12378545
 */
router.get("/users", getUsers);

router.get("/users/:id", getUserByID);

router.post("/users",adminMiddleware, authMiddleware, createUser);

router.put("/users/:id", authMiddleware, updateUserByID);

router.delete("/users/:id",adminMiddleware, authMiddleware, deleteUserByID);

export default router;
