import { Router } from "express";
import Auth from "./v1/Auth";

const router = Router();

router.use("/auth", Auth);

export default router;
