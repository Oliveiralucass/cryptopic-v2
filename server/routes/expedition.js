import express from 'express'
import { createExpeditionContent, getExpeditionContents } from '../controllers/expedition.js';

const router = express.Router();


/* READ */
router.get('/', getExpeditionContents)

/* CREATE */
router.post('/', createExpeditionContent)

export default router