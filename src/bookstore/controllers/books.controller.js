import { prisma } from "../../db.js";

export const getBooks = async (req, res) => {
  const books = await prisma.book.findMany();

  return books.length > 0
    ? res.status(200).json(books)
    : res.status(404).json({message:"No existe ningun libro"});
};

export const getBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const bookFound = await prisma.book.findFirst({
    where: {
      id: id,
    },
  });

  return bookFound
    ? res.status(200).json(bookFound)
    : res.status(404).json({message:"El libro buscado no existe"});
};

export const createBook = async (req, res) => {
  const data = req.body;
  const book = await prisma.book.findFirst({ where: { title: data.title } });

  return book
    ? res.status(400).json({message:"El libro ya existe"})
    : (await prisma.book.create({
        data: req.body,
      })) && res.status(201).json(req.body);
};

export const updateBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const bookFound = await prisma.book.findFirst({
    where: {
      id: id,
    },
  });

  return bookFound
    ? (await prisma.book.update({
        where: {
          id: id,
        },
        data: data,
      })) && res.status(200).json({message:"El libro se ha modificado con éxito"})
    : res.status(404).json({message:"El libro buscado no existe"});
};

export const deleteBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const bookFound = await prisma.book.findFirst({
    where: {
      id: id,
    },
  });
  return bookFound
    ? (await prisma.book.delete({
        where: {
          id: id,
        },
      })) && res.status(200).json({message:"El libro se ha eliminado correctamente"})
    : res.status(404).json({message:"El libro buscado no existe"});
};
