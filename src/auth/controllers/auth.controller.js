import { hashSync } from "bcryptjs";
import { prisma } from "../../db.js";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  await "Hello";
};

export const Register = async (req, res) => {
  const { username, password, email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });

  if (user) {
    throw Error("El usuario ya existe");
  }
  user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashSync(password, 10),
    },
  });
  res.json(user);
};
