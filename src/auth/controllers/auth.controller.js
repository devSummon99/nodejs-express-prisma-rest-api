import { prisma } from "../../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { BadRequestsException } from "../../exceptions/bad-request.js";
import { errorCodes } from "../../exceptions/root.js";

const { hashSync, compareSync } = bcrypt;

export const Login = async (req, res, next) => {
  const { password, email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });

  if (!user) {
    next(
      new BadRequestsException("El usuario no existe"),
      errorCodes.USER_NOT_FOUND
    );
  }
  if (!compareSync(password, user.password)) {
    next(
      new BadRequestsException("Contraseña incorrecta"),
      errorCodes.INCORRECT_PASSWORD
    );
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 86400, //24 hours
  });
  res.status(200).json({ user, token, message: "Ha entrado correctamente" });
  console.log(token);
};

export const Register = async (req, res, next) => {
  const { username, password, email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });

  if (user) {
    next(
      new BadRequestsException(
        "El usuario ya existe",
        errorCodes.USER_ALREADY_EXISTS
      )
    );
  }
  user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashSync(password, 10),
    },
  });

  res.status(200).json({ user, message: "Se ha registrado correctamente" });
};
