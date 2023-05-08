import express from "express";
import chapter from "../controllers/chapters.js";
const {read} = chapter
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/", read);

export default router;
