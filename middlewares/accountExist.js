import { User } from "../models/User.js ";
import defaultResponse from "../config/response.js";

const accountExist = {
  existSignin: async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      req.user = {
        id: user._id,
        email: user.email,
        photo: user.photo,
        password: user.password,
        role: user.role,
        is_verified: user.is_verified,
      };
      return next();
    }
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = "user does not exist!";
    return defaultResponse(req, res);
  },
  existSignup: async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      req.body.success = false;
      req.body.sc = 400;
      req.body.data = "user already exist!";
      return defaultResponse(req, res);
    }
    return next();
  },
};

export default accountExist;
