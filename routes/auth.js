import checkDuplicateEmail from "../middlewares/verifySignUp.js";
import authControllers from "../controllers/auth.js";
import { Router } from "express";

const router = Router();

router.post("/sign-up", [checkDuplicateEmail], authControllers.signUp);
router.post('/login', authControllers.login)

export default router
