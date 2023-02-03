import express from 'express'
import { addGlossaryContent } from '../controllers/userContent.js';
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.post('/:id/glossaryContentCompleted/:glossaryId', addGlossaryContent)

export default router