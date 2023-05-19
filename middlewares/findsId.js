import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";
import defaultResponse from "../config/response.js";

async function findsId(req, res, next) {
  const author = await Author.findOne({ user_id: req.user_id });
  const company = await Company.findOne({ user_id: req.user_id });

  if (author) {
    req.body.author_id = author._id;
    return next();
  } else if (company) {
    req.body.company_id = company._id;
    return next();
  } else {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = "not exist!";
    return defaultResponse(req, res);
  }
}

export default findsId;
