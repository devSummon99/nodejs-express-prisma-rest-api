import { Router } from "express";

import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/authors", async (req, res) => {
  const authors = await prisma.author.findMany();

  return authors.length > 0
    ? res.json(authors)
    : res.json("No existe ningun libro");
});

router.get("/authors/:id" , async (req, res) => {
  
})

router.post("/authors", async (req, res) => {
  const author = await prisma.author.findFirst({ where: { name: req.body.name } });
  if (!author) {
    const newAuthor = await prisma.author.create({
      data: req.body,
    });
    return res.json(newAuthor);
  }
  return res.json("El autor ya existe");
});

router.put("/authors/:id", async (req, res) => {

})

router.delete("/authors/:id", async (req, res) => {

})

export default router;
