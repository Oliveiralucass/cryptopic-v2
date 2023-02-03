import express from "express";
import { getLoggedUser, login, register } from '../controllers/auth.js'

const router = express.Router();

router.post('/login', login)
router.post('/register', register)
router.get('/getLoggedUser/:token', getLoggedUser)

export default router


