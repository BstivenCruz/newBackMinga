import express from "express";
import userRouter from "./users.js";
import authorRouter from "./author.js";
import companyRouter from "./company.js";
import mangaRouter from "./manga.js";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "index" });
});

router.use("/users", userRouter);
router.use("/authors", authorRouter);
router.use("/companies", companyRouter);
router.use("/mangas", mangaRouter);


export default router;
