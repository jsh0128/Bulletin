import { Router } from "express";
import Auth from "./v1/Auth";
import Post from "./v1/Post";
import Category from "./v1/Category";
import Comment from "./v1/Comment";
import Upload from "./v1/Upload";
import Reply from "./v1/Reply";

const router = Router();

router.use("/auth", Auth);
router.use("/post", Post);
router.use("/category", Category);
router.use("/comment", Comment);
router.use("/upload", Upload);
router.use("/reply", Reply);

export default router;
