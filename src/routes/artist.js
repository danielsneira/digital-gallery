import { Router } from 'express'
import artistControllers from '../controllers/artist'
import { check } from 'express-validator';

const router = Router();

router.post('/follow', artistControllers.artistFollow)

export default router