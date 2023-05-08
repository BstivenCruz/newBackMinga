import express from "express";
import category from "./category.js";
import chapter from "./chapter.js";
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("mangas");
});
router.use("/categories", category);
router.use("/chapters", chapter);

export default router;
