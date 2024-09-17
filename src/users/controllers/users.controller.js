import { prisma } from "../../db.js";
import bcrypt from "bcryptjs";

const { hashSync, compareSync } = bcrypt;

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();

  return users.length > 0
    ? res.json(users)
    : res.json("No existe ningun usuario") ;
};

export const getUserByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const userFound = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return userFound
    ? res.json(userFound)
    : res.json("El usuario buscado no existe");
};

export const createUser = async (req, res) => {
  const { username, password, email } = req.body;
  const user = await prisma.user.findFirst({ where: { email: email } });
  return user
    ? res.json("El usuario ya existe")
    : (await prisma.user.create({
        data: {
          username,
          email,
          password: hashSync(password, 10),
        },
      })) && res.json(req.body);
};

export const updateUserByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
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
        data: data,
        password: hashSync(data.password,10),
      })) && res.status(203).json("El usuario se ha modificado con éxito")
    : res.status(404).json("El usuario buscado no existe");
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
      })) && res.status(203).json("El usuario se ha eliminado correctamente")
    : res.status(404).json("El usuario buscado no existe");
};

