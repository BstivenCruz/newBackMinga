import express from  'express'
import company from '../controllers/companies.js';
const {read} = company
//var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', read);

export default router;