import { Chapter } from "../models/Chapter";
async function nextOrder(req, res, next) {
  if (req.body.order) {
    return next();
  }

  const chapter = await Chapter.find().sort({ order: -1 }).limit(1);
  req.body.order = chapter.order + 1;
  return next();
}

export default nextOrder;
