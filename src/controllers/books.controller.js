import { prisma } from "../db.js";

export const getBooks = async (req, res) => {
  res.send("Obteniendo libros");
};

export const getBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Buscando libros por id");
};

export const createBook = async (req, res) => {
  res.send("Creando libro");
};

export const updateBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Modificando libro por id");
};

export const deleteBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("El libro se ha eliminado correctamente");
};
