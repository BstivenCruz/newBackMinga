import { Manga } from "../models/Manga.js";
import defaultResponse from "../config/response.js";

async function isPropertyOf(req, res, next) {
  const mangaId = req.params.id;
  const authorId = req.body.author_id;
  const manga = await Manga.findOne({ _id: mangaId, author_id: authorId });
  if (manga) {
    return next();
  }
  req.body.success = false;
  req.body.sc = 400;
  req.body.data = "no is author!";
  return defaultResponse(req, res);
}

export default isPropertyOf;
