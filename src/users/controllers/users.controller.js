import { prisma } from "../../db.js";
import bcrypt from "bcryptjs";

const { hashSync, compareSync } = bcrypt;

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();d

  return users.length > 0
    ? res.status(200).json(users)
    : res.status(404).json({ message: "No existe ningun usuario" });
};

export const getUserByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const userFound = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return userFound
    ? res.status(200).json(userFound)
    : res.status(404).json({ message: "El usuario buscado no existe" });
};

export const createUser = async (req, res) => {
  const { username, password, email } = req.body;
  const user = await prisma.user.findFirst({ where: { email: email } });
  return user
    ? res.status(400).json({ message: "El usuario ya existe" })
    : (await prisma.user.create({
      data: {
        username,
        email,
        password: hashSync(password, 10),
      },
    })) && res.status(201).json(req.body);
};

export const updateUserByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const { username, password, email, roles } = req.body;
  const userFound = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return userFound
    ? (await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username,
        email,
        password: hashSync(password, 10),
        roles
      },
    })) && res.status(200).json({ message: "El usuario se ha modificado con éxito" })
    : res.status(404).json({ message: "El usuario buscado no existe" });
};

export const deleteUserByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const userFound = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
  return userFound
    ? (await prisma.user.delete({
      where: {
        id: id,
      },
    })) && res.status(201).json({ message: "El usuario se ha eliminado correctamente" })
    : res.status(404).json({ message: "El usuario buscado no existe" });
};
