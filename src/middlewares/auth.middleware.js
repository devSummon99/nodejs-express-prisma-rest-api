import jwt from "jsonwebtoken";
import { prisma } from "../db.js";

export const authMiddleware = async (req, res, next) => {
    try {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: "No Autorizado" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findFirst({
        where: {
            id: payload.id,
        },
    });
    if (!user) {
        return res.status(404).json({ message: "El usario no existe" })
    }
    console.log(user);
    req.user = user;
    next();
     } catch (error) {
         return res.status(401).json({ message: "No autorizado" })
     }

}