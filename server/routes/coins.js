import express from 'express'
import { createCoin, getCoinById, getCoinsList, likeCoin } from '../controllers/coins.js';

const router = express.Router();
    
router.post('/', createCoin);
router.get('/', getCoinsList);
router.get('/:coinId', getCoinById);

router.post('/:id/likeCoin/:coinId', likeCoin)  

export default router