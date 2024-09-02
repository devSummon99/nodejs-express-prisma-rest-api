import { Router } from "express";

import { prisma } from "../db.js";

const router = Router();

router.get("/books", async (req, res) => {
  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
  });

  return books.length > 0
    ? res.json(books)
    : res.json("No se encontraron libros");
});

router.get("/books/:id", async (req, res) => {
  const bookFound = await prisma.book.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (bookFound) {
    return res.json(bookFound);
  }
  return res.status(404).json("El libro buscado no existe");
});

router.post("/books", async (req, res) => {
  const book = await prisma.book.findFirst({
    where: { title: req.body.title },
  });
  if (!book) {
    const newBook = await prisma.book.create({
      data: req.body,
    });
    return res.json(newBook);
  }
  return res.json("El libro ya existe");
});

router.put("/books/:id", async (req, res) => {
  const bookFound = await prisma.book.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (bookFound) {
    await prisma.book.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });
    return res.status(204).json("El libro se ha modificado con éxito");
  }
  return res.status(404).json("El libro buscado no existe");
});

router.delete("/books/:id", async (req, res) => {
  const bookFound = await prisma.book.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (bookFound) {
    const bookDelete = await prisma.book.delete({
      where: {
        id: parseInt(req.params.id),
      }})
      if(bookDelete) {
        return res.status(203).json("El libro se ha eliminado correctamente")
      }
    }
    return res.status(404).json("El libro buscado no existe");
});

export default router;
