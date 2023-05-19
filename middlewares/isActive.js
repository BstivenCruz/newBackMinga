import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";
import defaultResponse from "../config/response.js";

async function isActive(req, res, next) {
  const author = await Author.findOne({ user_id: req.user._id });
  const company = await Company.findOne({ user_id: req.user._id });
  if (author) {
    if (author.active) {
      return next();
    } else {
      req.body.success = false;
      req.body.sc = 400;
      req.body.data = " author does not active!";
      return defaultResponse(req, res);
    }
  } else if (company) {
    if (company.active) {
      return next();
    } else {
      req.body.success = false;
      req.body.sc = 400;
      req.body.data = " company does not active!";
      return defaultResponse(req, res);
    }
  } else {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = " not author not company ";
    return defaultResponse(req, res);
  }
}

export default isActive;
