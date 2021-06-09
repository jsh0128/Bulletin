import { Request, Router } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import upload from "./Upload.ctrl/upload";
import fs from "fs";

fs.readdir("public", (error: NodeJS.ErrnoException) => {
  if (error) {
    fs.mkdirSync("public");
  }
});

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "./public/");
  },
  filename: (_req, file, cb) => {
    cb(null, `${file.fieldname}-${uuidv4()}-${encodeURI(file.originalname)}`);
  },
});

const options = {
  storage,
};

const uploadMid = multer(options) as any;

const router = Router();

router.post("/", uploadMid.array("files"), upload);

export default router;
