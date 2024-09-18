import { prisma } from "../../db.js";
import jwt from "jsonwebtoken";

export const Login = async (req,res)  => {
    await "Hello"
    
}

export const Register = async (req,res)  => {
    const { username, password, email } = req.body;
  const user = await prisma.user.findFirst({ where: { email: email } });
  const token = jwt.sign({ id: user.id }, username, password);

  return user
    ? res.json("El usuario ya existe")
    : (await prisma.user.create({
        data: {
          username,
          email,
          password: hashSync(password, 10),
        },
      })) && res.json("El usuario fue creado correctamente");
}