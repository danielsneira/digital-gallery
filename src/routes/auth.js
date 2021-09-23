import checkDuplicateEmail from "../middlewares/verifySignUp";
import authControllers from "../controllers/auth";
import { Router } from "express";

const router = Router();

router.post("/sign-up", [checkDuplicateEmail], authControllers.signUp);
router.post('/login', authControllers.login)

export default router
