import { Chapter } from "../models/Chapter.js";
import defaultResponse from "../config/response.js";
const get = {
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const chapter = await Chapter.findById(
        id,
        "-_id -manga_id -createdAt -updatedAt -__v"
      ).populate("manga_id", "-_id -createdAt -updatedAt -__v");
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = chapter;
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};
export default get;
