import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";
import defaultResponse from "../config/response.js";

async function findsId(req, res, next) {
  const author = await Author.findOne({ user_id: req.user_id });
  if (!author) {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = "author does not exist!";
    return defaultResponse(req, res);
  }
  req.body.author_id = author._id;

  const company = await Company.findOne({ user_id: req.user_id });
  if (!company) {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = "company does not exist!";
    return defaultResponse(req, res);
  }
  req.body.company_id = company._id;
  next();
}

export default findsId