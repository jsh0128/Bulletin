import { Router } from "express";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";
import CreateReply from "./Reply.ctrl/CreateReply";
import DeleteReply from "./Reply.ctrl/DeleteReply";
import ModifyReply from "./Reply.ctrl/ModifyReply";

const router = Router();
router.post("/create", validateUser, CreateReply);
router.post("/modify", validateUser, ModifyReply);
router.get("/delete", validateUser, DeleteReply);

export default router;
