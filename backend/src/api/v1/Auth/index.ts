import { Router } from "express";
import SendEmailCode from "./Auth.ctrl/SendEmailCode";
import SignIn from "./Auth.ctrl/SignIn";
import SignUp from "./Auth.ctrl/SignUp";
import GetInfo from "./Auth.ctrl/GetInfo";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";
import ChangeInfo from "./Auth.ctrl/ChangeInfo";
import GithubLogin from "./Auth.ctrl/GithubLogin";
import GithubRegister from "./Auth.ctrl/GithubRegister";

const router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/emailCode", SendEmailCode);
router.post("/githubLogin", GithubLogin);
router.post("/githubRegister", GithubRegister);
router.get("/getInfo", validateUser, GetInfo);
router.post("/changeInfo", validateUser, ChangeInfo);

export default router;
