import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";
import defaultResponse from "../config/response.js";

async function isActive(req, res, next) {
  const author = await Author.findOne({ user_id: req.user._id });
  if (author) {
    if (author.active) {
      return console.log("next");
    }
  } else if (!author) {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = " author does not active!";
    return defaultResponse(req, res);
  }
}

export default isActive;
