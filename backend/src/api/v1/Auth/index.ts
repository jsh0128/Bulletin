import { Router } from "express";
import SendEmailCode from "./Auth.ctrl/SendEmailCode";
import SignIn from "./Auth.ctrl/SignIn";
import SignUp from "./Auth.ctrl/SignUp";
import GetInfo from "./Auth.ctrl/GetInfo";
import {
  validateAdmin,
  validateUser,
} from "../../../lib/middleware/AuthTypeCheck";
import ChangeInfo from "./Auth.ctrl/ChangeInfo";
import GithubAuth from "./Auth.ctrl/GithubAuth";
import GetUserList from "./Auth.ctrl/GetUserList";

const router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/emailCode", SendEmailCode);
router.post("/githubAuth", GithubAuth);
router.get("/getInfo", validateUser, GetInfo);
router.post("/changeInfo", validateUser, ChangeInfo);
router.get("/getUserList", validateAdmin, GetUserList);

export default router;
