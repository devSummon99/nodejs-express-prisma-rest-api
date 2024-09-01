import { Router } from "express";

import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/books", async (req, res) => {
  const books = await prisma.book.findMany();

  return (books.length > 0) ? res.json(books): res.json("No se encontraron libros");
});

router.post("/books", async (req,res) => {
 
  const newBook = await prisma.book.create({
    data: req.body,
  });
  return res.json(newBook);

})
export default router;
