import { Company } from "../models/Company.js";
import defaultResponse from "../config/response.js";
const company = {
  create: async (req, res, next) => {
    try {
      req.body.user_id = "64496465077201479936117f";
      req.body.active = true;
      await Company.create(req.body);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = "company created";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  read: async (req, res, next) => {
    try {
      let companies = await Company.find();
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { companies };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};
export default company;
