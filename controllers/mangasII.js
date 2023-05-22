import { Manga } from "../models/Manga.js";
import defaultResponse from "../config/response.js";
const get = {
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const manga = await Manga.findById(id, "-_id -createdAt -updatedAt -__v")
        .populate("author_id", "-_id -createdAt -updatedAt -__v")
        .populate("company_id", "-_id -createdAt -updatedAt -__v")
        .populate("category_id", "-_id -createdAt -updatedAt -__v");
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = manga;
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  getForAuthor: async (req, res, next) => {
    try {
      const { idAuthor } = req.params;
      const query = req.query.new !== "false";
      const sort = query ? { createdAt: -1 } : { createdAt: 1 };
      const contador = await Manga.countDocuments({ author_id: idAuthor });
      const limit = contador < 4 ? contador : Math.ceil(contador / 2);
      if (contador === 0) {
        req.body.success = false;
        req.body.sc = 400;
        req.body.data = "there are not mangas created by this author";
        return defaultResponse(req, res);
      }
      let manga = await Manga.find(
        { author_id: idAuthor },
        "-_id -author_id -createdAt -updatedAt -__v"
      )
        .sort(sort)
        .limit(limit)
        .skip(0);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = manga;
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};

export default get;
