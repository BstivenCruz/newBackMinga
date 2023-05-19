import { Author } from "../models/Author.js";
import defaultResponse from "../config/response.js";

const get = {
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      let author = await Author.findById(
        id,
        "-_id -createdAt -updatedAt -__v"
      ).populate("user_id", "-_id -__v -createdAt -updatedAt");
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = author;
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};

export default get;
