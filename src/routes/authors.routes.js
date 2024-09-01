import { Router } from "express";

import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/authors", async(req, res) => {
  const authors = await prisma.author.findMany();
 
    return (authors > 0) ?  res.json(authors) : res.json("Error 404");
});

router.post("/authors", async (req, res) => {
  const newAuthor = await prisma.author.create({
    data: req.body,
  });
  return res.json(newAuthor);
   
});


export default router;
