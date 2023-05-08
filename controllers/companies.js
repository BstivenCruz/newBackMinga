import { Company } from "../models/Company.js";

const company = {
  read: async (req, res, next) => {
    try {
      let all = await Company.find();
      res.status(201).json({
        success: true,
        response: all,
      });
    } catch (error) {
      next(error);
    }
  },
};
export default company;
