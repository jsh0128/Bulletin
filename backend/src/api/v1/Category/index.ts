import Router from "express";
import { validateAdmin } from "../../../lib/middleware/AuthTypeCheck";
import CreateCategory from "./Category.ctrl/CreateCategory";
import DeleteCategory from "./Category.ctrl/DeleteCategory";
import GetCategory from "./Category.ctrl/GetCategory";
import ModifyCategory from "./Category.ctrl/ModifyCategory";

const router = Router();

router.post("/create", validateAdmin, CreateCategory);
router.post("/delete", validateAdmin, DeleteCategory);
router.post("/modify", validateAdmin, ModifyCategory);
router.get("/getCategory", GetCategory);

export default router;
