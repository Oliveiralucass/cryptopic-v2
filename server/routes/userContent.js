import express from 'express'
import { addDiscoverContent, addExpeditionContent, addGlossaryContent } from '../controllers/userContent.js';

const router = express.Router();

router.post('/:id/glossaryContentCompleted/:glossaryId', addGlossaryContent)
router.post('/:id/discoverContentCompleted/:discoverId', addDiscoverContent)
router.post('/:id/expeditionContentCompleted/:expeditionId', addExpeditionContent)


export default router