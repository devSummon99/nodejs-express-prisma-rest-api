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
* @swagger
* components:
*  schemas:
*    User:
*      type: object
*      properties:
*         id:
*          type: integer
*          example: 123
*         username:
*          type: string
*          example: pablo
*         email:
*          type: string
*          example: pablo@gmail.com
*         password: 
*          type: string
*          example: sadsasdasd123
*         roles: 
*          type: string
*          example: USER
*      required:
*        - email
*        - password
*/
router.get("/users", getUsers);

/**
 * @swagger
 * /users:
 *  get:
 *     tags:
 *       - Users
 *     summary: Get all users detail
 *     description: Get all users detail
 *     responses:
 *      200:
 *         description: Success
 *      404:
 *         description: No Found
 *      500:
 *         description: Internal Server Error
 */

router.get("/users/:id", getUserByID);


/**
 * @swagger
 * /users/{id}:
 *  get:
 *     tags:
 *       - Users
 *     summary: Get a user detail
 *     description: Get a user detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *      200:
 *         description: OK
 *      400:
 *         description: Bad Request
 *      500:
 *         description: Internal Server Error
 */


router.post("/users", adminMiddleware, authMiddleware, createUser);

/**
 * @swagger
 * /users:
 *  post:
 *      tags:
 *       - Users
 *      summary: Add user
 *      description: Add user
 *      requestBody:
 *          description: A JSON object containing user information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/User'
 *                 example:
 *                    username: Rexaurus
 *                    email: aaaa@gmail.com
 *                    password: aa2323
 *      responses:
 *           201:
 *            description: Created
 *           400:
 *            description: Bad Request
 *           401:
 *            description: Unauthorized
 *           500:
 *            description: Internal Server Error
 */

router.put("/users/:id", authMiddleware, updateUserByID);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *     tags:
 *       - Users
 *     summary: Edit user
 *     description: Edit user
 *     requestBody:
 *         description: A JSON object containing user information
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/User'
 *                 example:
 *                    username: Rexaurus
 *                    email: aaaa@gmail.com
 *                    password: aa2323
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *      200:
 *         description: OK
 *      401:
 *         description: Unauthorized
 *      404:
 *         description: No Found
 *      500:
 *         description: Internal Server Error
 */

router.delete("/users/:id", adminMiddleware, authMiddleware, deleteUserByID);


/**
 * @swagger
 * /users/{id}:
 *  delete:
 *     tags:
 *       - Users
 *     summary: Delete user
 *     description: Delete user
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *      200:
 *        description: Success
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: No Found
 *      500:
 *       description: Internal Server Error
 */


export default router;
