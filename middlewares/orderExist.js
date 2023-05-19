import { Chapter } from "../models/Chapter.js";
import defaultResponse from "../config/response.js";

async function orderExist(req, res, next) {
  const chapter = await Chapter.findOne({ order: req.body.order });
  if (chapter) {
    req.body.success = false;
    req.body.sc = 400;
    req.body.data = "chapter exist!";
    return defaultResponse(req, res);
  }
  return next();
}

export default orderExist;
