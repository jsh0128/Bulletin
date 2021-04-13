import { Router } from "express";
import Auth from "./v1/Auth";
import Post from "./v1/Post";
import Category from "./v1/Category";

const router = Router();

router.use("/auth", Auth);
router.use("/post", Post);
router.use("/category", Category);

export default router;
