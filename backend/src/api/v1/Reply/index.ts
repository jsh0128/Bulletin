import { Router } from "express";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";
import CreateReply from "./CreateReply";
import DeleteReply from "./DeleteReply";

const router = Router();
router.post("/create", validateUser, CreateReply);
router.post("/delete", validateUser, DeleteReply);

export default router;
