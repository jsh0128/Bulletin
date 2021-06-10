import { Router } from "express";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";
import CreateComment from "./Comment.ctrl/CreateComment";
import DeleteComment from "./Comment.ctrl/DeleteComment";
import GetComment from "./Comment.ctrl/GetComment";
import ModifyComment from "./Comment.ctrl/ModifyComment";

const router = Router();

router.post("/create", validateUser, CreateComment);
router.post("/delete", validateUser, DeleteComment);
router.post("/modify", validateUser, ModifyComment);
router.get("/getComment", GetComment);

export default router;
