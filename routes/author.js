import express from  'express'
import authors from '../controllers/authors.js';
const {read} = authors
import isActive from '../middlewares/isActive.js';
const router = express.Router();

/* GET users listing. */
router.get('/',read);
router.put('/active',isActive)

export default router;