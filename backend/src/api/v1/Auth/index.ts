import { Router } from "express";
import SignIn from "./Auth.ctrl/SignIn";
import SignUp from "./Auth.ctrl/SignUp";

const router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);

export default router;
