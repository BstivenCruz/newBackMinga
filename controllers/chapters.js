import { Chapter } from "../models/Chapter.js";

const chapter = {
  read: async (req, res, next) => {
    try {
      const all = await Chapter.find();
      res.status(201).json({
        success: true,
        response: all,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default chapter;
