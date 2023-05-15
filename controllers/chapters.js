import { Chapter } from "../models/Chapter.js";
import defaultResponse from "../config/response.js";
const chapter = {
  read: async (req, res, next) => {
    try {
      const chapters = await Chapter.find();
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
