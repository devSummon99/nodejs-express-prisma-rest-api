import { Router } from "express";

import {
  getBooks,
  getBookByID,
  createBook,
  updateBookByID,
  deleteBookByID,
} from "../controllers/books.controller.js";
import { adminMiddleware } from "../../middlewares/index.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *      type: object
 *      properties:
 *         id:
 *          type: integerd
 *          example: 123
 *         title:
 *          type: string
 *          example: la edad de oro
 *         description:
 *          type: string
 *          example: aaa
 *         price: 
 *          type: integer
 *          example: 999
 *         Author: 
 *          type: object
 *          example: { name: pascual }
 *         authorID:
 *          type: integer
 *          example: 123
 *         stock: 
 *          type: integer
 *          example: 200
 *      required:
 *       - title
 *       - description
 *       - authorID
         
 */

router.get("/books", getBooks);

/**
 * @swagger
 * /books:
 *  get:
 *     tags:
 *       - Books
 *     summary: Get all books detail
 *     description: Get all books detail
 *     responses:
 *      200:
 *         description: Success
 *      404:
 *         description: No Found
 *      500:
 *         description: Internal Server Error
 */

router.get("/books/:id", getBookByID);

/**
 * @swagger
 * /books/{id}:
 *  get:
 *     tags:
 *       - Books
 *     summary: Get a book detail
 *     description: Get a book detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
 *     responses:
 *      200:
 *         description: OK
 *      400:
 *         description: Bad Request
 *      500:
 *         description: Internal Server Error
 */

router.post("/books", adminMiddleware, createBook);

/**
 * @swagger
 * /books:
 *  post:
 *      tags:
 *       - Books
 *      summary: Add book
 *      description: Add book
 *      requestBody:
 *          description: A JSON object containing book information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Book'
 *                 example:
 *                    title: Rexaurus
 *                    description: aaaa
 *                    authorID: 1
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

router.put("/books/:id", adminMiddleware, updateBookByID);

/**
 * @swagger
 * /books/{id}:
 *  put:
 *     tags:
 *       - Books
 *     summary: Edit book
 *     description: Edit book
 *     requestBody:
 *         description: A JSON object containing book information
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Book'
 *                 example:
 *                    title: Rexaurus
 *                    description: aaaa
 *                    authorID: 1
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
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

router.delete("/books/:id", adminMiddleware, deleteBookByID);

/**
 * @swagger
 * /books/{id}:
 *  delete:
 *     tags:
 *       - Books
 *     summary: Delete book
 *     description: Delete book
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
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
