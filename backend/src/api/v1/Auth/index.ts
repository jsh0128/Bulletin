import { Router } from "express";
import SendEmailCode from "./Auth.ctrl/SendEmailCode";
import SignIn from "./Auth.ctrl/SignIn";
import SignUp from "./Auth.ctrl/SignUp";

const router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/emailcode", SendEmailCode);

export default router;
