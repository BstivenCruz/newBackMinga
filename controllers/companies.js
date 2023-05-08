import { Company } from "../models/Company.js";

const company = {
  create: async (req, res, next) => {
    try {
      req.body.user_id = "64496465077201479936117f";
      req.body.active = true;
      const create = await Company.create(req.body);
      res.status(201).json({
        success: true,
        response: create,
      });
    } catch (error) {
      next(error);
    }
  },
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
