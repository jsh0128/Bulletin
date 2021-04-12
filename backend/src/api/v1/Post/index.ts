import Router from "express";
import CreatePost from "./Post.ctrl/CreatePost";
import { validateAdmin } from "../../../lib/middleware/AuthTypeCheck";
import DeletePost from "./Post.ctrl/DeletePost";
import ModifyPost from "./Post.ctrl/ModifyPost";

const router = Router();

router.post("/create", validateAdmin, CreatePost);
router.post("/delete", validateAdmin, DeletePost);
router.post("/modify", validateAdmin, ModifyPost);

export default router;
