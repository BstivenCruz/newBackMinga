import { Author } from "../models/Author.js";

const authors = {
  read: async (req, res, next) => {
    try {
      const all = await Author.find();
      res.status(201).json({
        success: true,
        response: all,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export default authors 