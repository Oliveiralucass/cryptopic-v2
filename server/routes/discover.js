import express from 'express'
import { createDiscoverContent, getDiscoverContents } from '../controllers/discover.js';

const router = express.Router();


/* READ */
router.get('/', getDiscoverContents)

/* CREATE */
router.post('/', createDiscoverContent)

export default router