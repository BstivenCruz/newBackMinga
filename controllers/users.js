import { User } from "../models/User.js";
import defaultResponse from "../config/response.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";

const user = {
  signup: async (req, res, next) => {
    req.body.role = 0;
    req.body.is_online = true;
    req.body.is_verified = true;
    req.body.verify_code = crypto.randomBytes(10).toString("hex");
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    try {
      await User.create(req.body);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = "user created";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  read: async (req, res, next) => {
    try {
      const users = await User.find();
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = { users };
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
};

export default user;
