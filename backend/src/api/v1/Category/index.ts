import Router from "express";
import CreateCategory from "./Category.ctrl/CreateCategory";

const router = Router();

router.post("/create", CreateCategory);

export default router;
