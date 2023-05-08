import express from "express";
import category from "./category.js";
import chapter from "./chapter.js";
import mangas from "../controllers/mangas.js";
const {read} = mangas
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/", read);
router.use("/categories", category);
router.use("/chapters", chapter);

export default router;
