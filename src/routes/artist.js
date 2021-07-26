import { Router } from 'express'
import artistControllers from '../controllers/artist'

const router = Router();

router.post('/sign-up', [
  check('fullname', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio').not().isEmpty(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validarCampos
], artistControllers.signUp);

router.post('/login',[
  check('email', 'El email es obligatorio').not().isEmpty(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),

], artistControllers.login);

export default router