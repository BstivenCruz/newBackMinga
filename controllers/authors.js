import { Author } from "../models/Author.js";

const authors = {
  create: async (req, res, next) => {
    try {
      req.body.user_id = "64496465077201479936117f";
      req.body.active = true;
      console.log(req.body);
      let one = await Author.create(req.body);
      res.status(201).json({
        success: true,
        response: one,
      });
    } catch (error) {
      next(error);
    }
  },

  read: async (req, res, next) => {
    try {
      const all = await Author.find();
      res.status(201).json({
        success: true,
        response: all,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default authors;
