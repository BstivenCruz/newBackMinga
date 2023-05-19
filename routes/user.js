import express from "express";
import passwordIsOk from "../middlewares/passwordOk.js";
import accountExist from "../middlewares/accountExist.js";
import passport from "../config/passport.js";
const { existSignin, existSignup } = accountExist;
import user from "../controllers/users.js";
const { read, signup, signin, signout } = user;

const router = express.Router();

/* GET users listing. */
router.get("/", read);
router.post("/signup", existSignup, signup);
router.post("/signin", existSignin, passwordIsOk, signin);
router.put("/signout",passport.authenticate("jwt", { session: false }),signout);

export default router;
