import express from "express";
import user from "../controllers/users.js";
const { read , signup} = user;
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/", read);
router.post("/signup", signup)
router.post("/signin")


export default router;
