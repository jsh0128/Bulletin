import Router from "express";
import CreatePost from "./Post.ctrl/CreatePost";
import { validateAdmin } from "../../../lib/middleware/AuthTypeCheck";
import DeletePost from "./Post.ctrl/GetPost";
import ModifyPost from "./Post.ctrl/ModifyPost";
import DetailJoin from "./Post.ctrl/DetailJoin";

const router = Router();

router.post("/create", validateAdmin, CreatePost);
router.post("/delete", validateAdmin, DeletePost);
router.post("/modify", validateAdmin, ModifyPost);

router.get("/getpost", DetailJoin);

export default router;
