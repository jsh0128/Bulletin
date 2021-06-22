import { Router } from "express";
import SendEmailCode from "./Auth.ctrl/SendEmailCode";
import SignIn from "./Auth.ctrl/SignIn";
import SignUp from "./Auth.ctrl/SignUp";
import GetInfo from "./Auth.ctrl/GetInfo";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";
import ChangeInfo from "./Auth.ctrl/ChangeInfo";
import GithubAuth from "./Auth.ctrl/GithubAuth";

const router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/emailCode", SendEmailCode);
router.post("/githubAuth", GithubAuth);
router.get("/getInfo", validateUser, GetInfo);
router.post("/changeInfo", validateUser, ChangeInfo);

export default router;
