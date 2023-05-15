import { Manga } from "../models/Manga.js";
import defaultResponse from "../config/response.js";

const mangas = {
  read: async (req, res, next) => {
    try {
      let mangas = await Manga.find();
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { mangas };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};
export default mangas;
