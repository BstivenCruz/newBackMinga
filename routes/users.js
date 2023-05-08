import express from "express";
import user from "../controllers/users.js";
const { read } = user;
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/", read);

export default router;
