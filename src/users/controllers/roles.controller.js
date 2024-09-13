import { prisma } from "../../db.js";

export const getRoles = async (req, res) => {
  const roles = await prisma.role.findMany();

  return roles.length > 0
    ? res.json(roles)
    : res.json("No existe ningun rol");
};

export const getRoleByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const roleFound = await prisma.role.findFirst({
    where: {
      id: id,
    },
  });

  return roleFound
    ? res.json(roleFound)
    : res.json("El rol buscado no existe");
};

export const createRole = async (req, res) => {
  const data = req.body;
  const role = await prisma.role.findFirst({ where: { name: data.name } });

  return role
    ? res.json("El rol ya existe")
    : (await prisma.role.create({
        data: req.body,
      })) && res.json(req.body);
};

export const updateRoleByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const roleFound = await prisma.role.findFirst({
    where: {
      id: id,
    },
  });

  return roleFound
    ? (await prisma.role.update({
        where: {
          id: id,
        },
        data: data,
      })) && res.status(203).json("El rol se ha modificado con éxito")
    : res.status(404).json("El rol buscado no existe");
};

export const deleteRoleByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const roleFound = await prisma.role.findFirst({
    where: {
      id: id,
    },
  });
  return roleFound
    ? (await prisma.role.delete({
        where: {
          id: id,
        },
      })) && res.status(203).json("El rol se ha eliminado correctamente")
    : res.status(404).json("El rol buscado no existe");
};
