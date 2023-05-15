import { Author } from "../models/Author.js";
import defaultResponse from "../config/response.js";
const authors = {
  create: async (req, res, next) => {
    try {
      req.body.user_id = "64496465077201479936117f";
      req.body.active = true;
      await Author.create(req.body);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = "author created";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  read: async (req, res, next) => {
    try {
      const authors = await Author.find();
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { authors };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};
export default authors;
