import { Router } from 'express'
import artControllers from '../controllers/art.js'

const router = Router();

router.get('/', artControllers.getArt)
router.get('/artist/:id', artControllers.getArtByArtist)
router.post('/upload', artControllers.artPost)
router.post('/comment', artControllers.artComment)
router.post('/like', artControllers.artToggleLike)

export default router
