import Router from "express";
import CreatePost from "./Post.ctrl/CreatePost";
import { validateAdmin } from "../../../lib/middleware/AuthTypeCheck";

const router = Router();

router.post("/", validateAdmin, CreatePost);
