import { Request, Router } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import upload from "./Upload.ctrl/upload";

const storage = multer.diskStorage({
  destination: (_req: Request, _file, cb: Function) => {
    cb(null, "./public/");
  },
  filename: (_req: Request, file, cb: Function) => {
    cb(null, `${file.fieldname}-${uuidv4()}-${file.originalname}`);
  },
});

const options = {
  storage,
};

const uploadMid = multer({ storage }) as any;

const router = Router();

router.post("/", uploadMid.array("files"), upload);

export default router;
