import { Router } from "express";

import { Login, Register} from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/login", Login);

router.post("/auth/register", Register);

export default router;