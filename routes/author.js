import express from  'express'
import authors from '../controllers/authors.js';
const {read} = authors
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/',read);

export default router;