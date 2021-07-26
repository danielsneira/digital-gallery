import { Router } from 'express'
import artControllers from '../controllers/art.js'

const router = Router();

router.get('/', artControllers.artGet)

export default router