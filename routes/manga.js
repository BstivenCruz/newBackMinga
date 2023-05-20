import express from "express";
import category from "./category.js";
import chapter from "./chapter.js";
import mangas from "../controllers/mangas.js";
const {read} = mangas
import get from "../controllers/mangasII.js";
const { getForAuthor } = get

const router = express.Router();

/* GET users listing. */
router.get("/", read);
router.use("/categories", category);
router.use("/chapters", chapter);
router.get('/authors/:idAuthor',getForAuthor)

export default router;
