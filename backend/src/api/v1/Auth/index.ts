import { Router } from "express";
import SendEmailCode from "./Auth.ctrl/SendEmailCode";
import SignIn from "./Auth.ctrl/SignIn";
import SignUp from "./Auth.ctrl/SignUp";
import GetInfo from "./Auth.ctrl/GetInfo";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";

const router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/emailcode", SendEmailCode);
router.get("/getinfo", validateUser, GetInfo);

export default router;
