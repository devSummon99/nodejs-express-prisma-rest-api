export const adminMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

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
            return res.status(404).json({ message: "El usario no existe" });
        }
        req.user = user;
        console.log(user.role)
        if (user.role == 'ADMIN') {
            next()
        } else {
            return res.status(401).json({ message: "No Autorizado" });
        }
    } catch (error) {
        return res.status(401).json({ message: "No autorizado" });
    }

}