import { Router } from "express";
import CertEmailCheck from "./Auth.ctrl/CertEmailCheck";
import SendEmailCode from "./Auth.ctrl/SendEmailCode";
import SignIn from "./Auth.ctrl/SignIn";
import SignUp from "./Auth.ctrl/SignUp";

const router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/emailcode", SendEmailCode);
router.post("/emailcodesend", CertEmailCheck);

export default router;
