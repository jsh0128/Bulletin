import Router from "express";
import { validateAdmin } from "../../../lib/middleware/AuthTypeCheck";
import CreateCategory from "./Category.ctrl/CreateCategory";
import DeleteCategory from "./Category.ctrl/DeleteCategory";
import ModifyCategory from "./Category.ctrl/ModifyCategory";

const router = Router();

router.post("/create", validateAdmin, CreateCategory);
router.post("/delete", validateAdmin, DeleteCategory);
router.post("/modify", validateAdmin, ModifyCategory);

export default router;
