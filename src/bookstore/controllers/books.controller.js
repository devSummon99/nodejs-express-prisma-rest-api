import { prisma } from "../../db.js";

export const getBooks = async (req, res) => {
  const books = await prisma.book.findMany();

  return books.length > 0
    ? res.json(books)
    : res.json("No existe ningun libro");
};

export const getBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const bookFound = await prisma.book.findFirst({
    where: {
      id: id,
    },
  });

  return bookFound
    ? res.json(bookFound)
    : res.json("El libro buscado no existe");
};

export const createBook = async (req, res) => {
  const data = req.body;
  const book = await prisma.book.findFirst({ where: { title: data.title } });

  return book
    ? res.json("El libro ya existe")
    : (await prisma.book.create({
        data: req.body,
      })) && res.json(req.body);
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
      })) && res.status(203).json("El libro se ha modificado con éxito")
    : res.status(404).json("El libro buscado no existe");
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
      })) && res.status(203).json("El libro se ha eliminado correctamente")
    : res.status(404).json("El libro buscado no existe");
};
