import express from 'express'
import { addDiscoverContent, addExpeditionContent, addGlossaryContent, likeCoin } from '../controllers/userContent.js';

const router = express.Router();

router.post('/:id/glossaryContentCompleted/:glossaryId', addGlossaryContent)
router.post('/:id/discoverContentCompleted/:discoverId', addDiscoverContent)
router.post('/:id/expeditionContentCompleted/:expeditionId', addExpeditionContent)

router.post('/:id/likeCoin/:coinId', likeCoin)  

export default router