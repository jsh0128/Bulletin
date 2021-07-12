import { Router } from "express";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";
import CreateReply from "./CreateReply";

const router = Router();
router.post("/create", validateUser, CreateReply);

export default router;
