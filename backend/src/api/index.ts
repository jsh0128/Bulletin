import { Router } from "express";
import Auth from "./v1/Auth";
import Post from "./v1/Post";
import Category from "./v1/Category";
import Comment from "./v1/Comment";
import Upload from "./v1/Upload";

const router = Router();

router.use("/auth", Auth);
router.use("/post", Post);
router.use("/category", Category);
router.use("/comment", Comment);
router.use("/upload", Upload);

export default router;
