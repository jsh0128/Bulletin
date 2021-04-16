import { Router } from "express";
import Auth from "./v1/Auth";
import Post from "./v1/Post";
import Category from "./v1/Category";
import Comment from "./v1/Comment";

const router = Router();

router.use("/auth", Auth);
router.use("/post", Post);
router.use("/category", Category);
router.use("/coment", Comment);

export default router;
