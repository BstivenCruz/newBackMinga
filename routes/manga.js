import express from "express";
import category from "./category.js";
import chapter from "./chapter.js";
import findsId from "../middlewares/findsId.js";
import mangas from "../controllers/mangas.js";
const { read } = mangas;
import get from "../controllers/mangasII.js";
const { getForAuthor, getOne, getMe } = get;
import passport from "../config/passport.js";

const router = express.Router();

/* GET users listing. */
router.use("/chapters", chapter);
router.use("/categories", category);
router.get("/", read);
router.get("/:id", getOne);
router.get("/authors/:idAuthor", getForAuthor);

export default router;
