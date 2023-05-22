import { Chapter } from "../models/Chapter.js";
import defaultResponse from "../config/response.js";
const chapter = {
  read: async (req, res, next) => {
    try {
      const chapters = await Chapter.find()
        .select("-_id -manga_id -createdAt -updatedAt -__v")
        .populate("manga_id", "-_id -createdAt -updatedAt -__v");
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { chapters };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};

export default chapter;
