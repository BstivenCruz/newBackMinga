import { Category } from "../models/Category.js";

const categories = {
  read: async (req, res, next) => {
    try {
      let all = await Category.find();
      res.status(201).json({
        success: true,
        response: all,
      });
    } catch (error) {
      next(error);

    }
  },
};
export default categories;
