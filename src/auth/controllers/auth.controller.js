import { prisma } from "../../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { hashSync, compareSync } = bcrypt;

export const Login = async (req, res ) => {
  const { password, email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });

  if (!user) {
  return res.status(404).json({message: "El usario no existe"})
  }
  if (!compareSync(password, user.password)) {
    return res.status(401).json({message: "Contraseña incorrecta"})
  }
  else {
    const  token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400, //24 hours
    });
    res.status(200).json({ user, token, message: "Ha entrado correctamente" });
  }
  
};

export const Register = async (req, res) => {
  const { username, password, email } = req.body;
  let user = await prisma.user.findFirst({ where: { email: email } });

  if (user) {
    return res.status(400).json({message: "El usario  ya existe"})
  }
  user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashSync(password, 10),
    },
  });

  res.status(201).json({ user, message: "Se ha registrado correctamente" });
};
