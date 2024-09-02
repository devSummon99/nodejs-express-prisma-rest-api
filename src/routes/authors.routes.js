import { Router } from "express";

import { prisma } from "../db.js";

const router = Router();

router.get("/authors", async (req, res) => {
  const authors = await prisma.author.findMany();

  return authors.length > 0
    ? res.json(authors)
    : res.json("No existe ningun autor");
});

router.get("/authors/:id" , async (req, res) => {
  const authorFound = await prisma.author.findFirst(
    {where: {
        id: parseInt(req.params.id)
      }
    })
    if(authorFound) {
      return res.json(authorFound);
    }
    return res.json("El autor buscado no existe");
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
  const authorFound = await prisma.author.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (authorFound) {
    await prisma.author.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body,
    });
    return res.status(204).json("El autor se ha modificado con éxito");
  }
  return res.status(404).json("El autor buscado no existe");
})

router.delete("/authors/:id", async (req, res) => {
  const authorFound = await prisma.author.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (authorFound) {
    const authorDelete = await prisma.author.delete({
      where: {
        id: parseInt(req.params.id),
      }})
      if(authorDelete) {
        return res.status(203).json("El autor se ha eliminado correctamente")
      }
    }
    return res.status(404).json("El autor buscado no existe");
  })

export default router;
