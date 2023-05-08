import express from  'express'
import categories from '../controllers/categories.js';
const {read } = categories
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', read);

export default router;