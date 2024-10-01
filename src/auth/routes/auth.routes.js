import { Router } from "express";

import { Login, Register} from "../controllers/auth.controller.js";

const router = Router();

/** 
* @swagger
* components:
*  securitySchemes:
*   BearerAuth: 
*           type: http
*           scheme: bearer
*           bearerFormat: 'JWT'
* security: 
    bearerAuth: []
*/

router.post("/auth/login", Login);

/**
 * @swagger
 * /auth/login:
 *  post:
 *      tags:
 *       - Auth
 *      summary: Login an user
 *      description: Login an user
 *      requestBody:
 *          description: A JSON object containing user information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/User'
 *                 example:
 *                    email: rm2333@cu.cu
 *                    password: "72658466"
 *      responses:
 *           201:
 *            description: Created
 *           401:
 *            description: Unauthorized
 *           404:
 *            description: No Found
 *           500:
 *            description: Internal Server Error
 */

router.post("/auth/register", Register);

/**
 * @swagger
 * /auth/register:
 *  post:
 *      tags:
 *       - Auth
 *      summary: Register an user
 *      description: Register an user
 *      requestBody:
 *          description: A JSON object containing User information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/User'
 *                 example:
 *                    username: pabpasdas
 *                    email: aaaa@gmail.com
 *                    password: as11212
 *      responses:
 *           201:
 *            description: Created
 *           400:
 *            description: Bad Request
 *           500:
 *            description: Internal Server Error
 */


export default router;