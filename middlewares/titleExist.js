import { Manga } from "../models/Manga.js";
import defaultResponse from "../config/response.js";

async function titleExist(req, res, next) {
  const manga = await Manga.findOne({ title: req.body.title });
  if (manga) {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = "manga exist!";
    return defaultResponse(req, res);
  }
  return next();
}
export default titleExist