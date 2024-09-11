import { prisma } from "../db.js";

export const getAuthors = async (req, res) => {
  res.send("Obteniendo autores");
};

export const getAuthorByID = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Buscando autores por id");
};

export const createAuthor = async (req, res) => {
  res.send("Creando autor");
};

export const updateAuthorByID = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("Modificando autor por id");
};

export const deleteAuthorByID = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("El autor se ha eliminado correctamente");
};
