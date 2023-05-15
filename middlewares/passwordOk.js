import bycryptjs from "bcryptjs";
import defaultResponse from "../config/response.js";

function passwordOk(req, res, next) {
    
  const passUser = req.user.password;
  const userPass = req.body.password;
  if (bycryptjs.compareSync(userPass, passUser)) {
    return next();
  }
  req.body.success = false;
  req.body.sc = 400;
  req.body.data = "password incorrect";
  return defaultResponse(req, res);
}
export default passwordOk;
