import express from 'express'
import { createGlossaryContent, getGlossaryContents } from '../controllers/glossary.js';

const router = express.Router();


/* READ */
router.get('/', getGlossaryContents)

/* CREATE */
router.post('/', createGlossaryContent)

export default router