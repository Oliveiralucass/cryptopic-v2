import express from 'express'
import { createCoin, getCoinById, getCoinsList } from '../controllers/coins.js';

const router = express.Router();
    
router.post('/', createCoin);
router.get('/', getCoinsList);
router.get('/coinById/:coinId', getCoinById);

export default router