import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as path from "path";
import api from "./api";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use(api);

export default app;
