import { Router } from "express";
import Auth from "./v1/Auth";
import Post from "./v1/Post";

const router = Router();

router.use("/auth", Auth);
router.use("/post", Post);

export default router;
