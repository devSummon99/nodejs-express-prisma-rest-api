import { Router } from "express";

import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/books", async (req, res) => {
  const books = await prisma.book.findMany(
    {include: {author:true}},
  );

  return books.length > 0
    ? res.json(books)
    : res.json("No se encontraron libros");
});

router.get("/books/:id" , async (req, res) => {
  
})

router.post("/books", async (req, res) => {
  const book = await prisma.book.findFirst({where:{title: req.body.title}});
  if(!book) {
    const newBook = await prisma.book.create({
      data: req.body,
    });
    return res.json(newBook);
  }
  return res.json("El libro ya existe");
});

router.put("/books/:id", async (req, res) => {

})

router.delete("/books/:id", async (req, res) => {
  
})

export default router;
