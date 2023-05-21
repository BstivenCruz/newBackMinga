import express from "express";
import chapter from "../controllers/chapters.js";
const { read } = chapter;
import get from "../controllers/chaptersII.js";
const { getOne } = get;
const router = express.Router();

/* GET users listing. */
router.get("/", read);
router.get("/:id", getOne);

export default router;
