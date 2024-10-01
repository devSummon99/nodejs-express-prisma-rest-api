import { prisma } from "../../db.config.js.js";

export const getAuthors = async (req, res) => {
  const authors = await prisma.author.findMany();

  return authors.length > 0
    ? res.status(200).json(authors)
    : res.status(404).json({message: "No existe ningun autor"});
};

export const getAuthorByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const authorFound = await prisma.author.findFirst({
    where: {
      id: id,
    },
  });
  
  return authorFound
    ? res.status(200).json(authorFound)
    : res.status(404).json({message:"El autor buscado no existe"});
};

export const createAuthor = async (req, res) => {
  const data = req.body;
  const author = await prisma.author.findFirst({ where: { name: data.name } });

  return author
    ? res.status(400).json({message:"El autor ya existe"})
    : (await prisma.author.create({
        data: req.body,
      })) && res.status(201).json(req.body);
};

export const updateAuthorByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const authorFound = await prisma.author.findFirst({
    where: {
      id: id,
    },
  });

  return authorFound
    ? (await prisma.author.update({
        where: {
          id: id,
        },
        data: data,
      })) && res.status(203).json({message:"El autor se ha modificado con éxito"})
    : res.status(404).json({message:"El autor buscado no existe"});
};

export const deleteAuthorByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const authorFound = await prisma.author.findFirst({
    where: {
      id: id,
    },
  });
  return authorFound
    ? (await prisma.author.delete({
        where: {
          id: id,
        },
      })) && res.status(203).json({message:"El autor se ha eliminado correctamente"})
    : res.status(404).json({message:"El autor buscado no existe"});
};
