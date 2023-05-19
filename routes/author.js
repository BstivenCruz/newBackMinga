import express from "express";
import authors from "../controllers/authors.js";
const { read } = authors;
import get from "../controllers/authorsII.js";
const { getOne } = get;
const router = express.Router();

/* GET users listing. */
router.get("/", read);
router.get("/:id", getOne);

export default router;
