import { Router } from "express";
import { validateUser } from "../../../lib/middleware/AuthTypeCheck";
import CreateComent from "./Coment.ctrl/CreateComent";
import DeleteComent from "./Coment.ctrl/DeleteComent";
import GetComent from "./Coment.ctrl/GetComent";
import ModifyComent from "./Coment.ctrl/ModifyComent";

const router = Router();

router.post("/create", validateUser, CreateComent);
router.post("/delete", validateUser, DeleteComent);
router.post("/modify", validateUser, ModifyComent);
router.post("/getComent", GetComent);

export default router;
