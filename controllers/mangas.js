import { Manga } from "../models/Manga.js";

const mangas = {
  read: async (req, res, next) => {
    try {
      let all = await Manga.find();
      res.status(201).json({
        success: true,
        response: all,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default mangas