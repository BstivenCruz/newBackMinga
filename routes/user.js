import express from "express";
import passwordIsOk from "../middlewares/passwordOk.js";
import accountExist from "../middlewares/accountExist.js";
import passport from "../config/passport.js";
const { Existsignin, Existsignup } = accountExist;
import user from "../controllers/users.js";
const { read, signup, signin, signout } = user;

const router = express.Router();

/* GET users listing. */
router.get("/",  read);
router.post("/signup", Existsignup, signup);
router.post("/signin", Existsignin, passwordIsOk, signin);
router.post("/signout" ,signout);

export default router;
