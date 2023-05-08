import { User } from "../models/User.js";

const user = {
  read: async (req, res, next) => {
    try {
      const all = await User.find();
      res.status(201).json({
        success: true,
        response: all,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default user;
