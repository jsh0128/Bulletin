import Router from "express";
import CreatePost from "./Post.ctrl/CreatePost";
import { validateAdmin } from "../../../lib/middleware/AuthTypeCheck";
import DeletePost from "./Post.ctrl/DeletePost";
import ModifyPost from "./Post.ctrl/ModifyPost";
import DetailJoin from "./Post.ctrl/GetPost";
import SearchPost from "./Post.ctrl/SearchPost";

const router = Router();

router.post("/create", validateAdmin, CreatePost);
router.post("/delete", validateAdmin, DeletePost);
router.post("/modify", validateAdmin, ModifyPost);

router.post("/search", SearchPost);
router.get("/getpost", DetailJoin);

export default router;
