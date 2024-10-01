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
/**
 * @swagger
 * components:
 *  schemas:
 *    Author:
 *      type: object
 *      properties:
 *        id:
 *           type: integer
 *           example: 123
 *        name:
 *         type: string
 *         example: pablo
 *        books: 
 *         type: array
 *         example: ["libro1", "libro2"]
 *      required:
 *         - name
 */

router.get("/authors", getAuthors);

/**
 * @swagger
 * /authors:
 *  get:
 *     tags:
 *       - Author
 *     summary: Get all authors detail
 *     description: Get all authors detail
 *     responses:
 *      200:
 *         description: Success
 *      404:
 *         description: No Found
 *      500:
 *         description: Internal Server Error
 */

router.get("/authors/:id", getAuthorByID);

/**
 * @swagger
 * /authors/{id}:
 *  get:
 *     tags:
 *       - Author
 *     summary: Get a author detail
 *     description: Get a author detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Author id
 *     responses:
 *      200:
 *         description: OK
 *      400:
 *         description: Bad Request
 *      500:
 *         description: Internal Server Error
 */

router.post("/authors",adminMiddleware, createAuthor);

/**
 * @swagger
 * /authors:
 *  post:
 *      tags:
 *       - Author
 *      summary: Add author
 *      security:
 *           - bearerAuth: [] 
 *      description: Add author
 *      requestBody:
 *          description: A JSON object containing author information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Author'
 *                 example:
 *                    name: Juan
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

router.put("/authors/:id",adminMiddleware, updateAuthorByID);

/**
 * @swagger
 * /authors/{id}:
 *  put:
 *     tags:
 *       - Author
 *     summary: Edit author
 *     security:
 *           - bearerAuth: [] 
 *     description: Edit author
 *     requestBody:
 *         description: A JSON object containing author information
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Author'
 *                 example:
 *                    name: fife
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Author id
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

router.delete("/authors/:id",adminMiddleware, deleteAuthorByID);

/**
 * @swagger
 * /authors/{id}:
 *  delete:
 *     tags:
 *       - Author
 *     summary: Delete author
 *     security:
 *           - bearerAuth: [] 
 *     description: Delete author 
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Author id
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
