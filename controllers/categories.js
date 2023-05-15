import { Category } from "../models/Category.js";
import defaultResponse from "../config/response.js";
const categories = {
  read: async (req, res, next) => {
    try {
      const categories = await Category.find();
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { categories };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};
export default categories;
