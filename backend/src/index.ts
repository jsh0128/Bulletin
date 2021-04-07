import "reflect-metadata";
import * as database from "./database";
import http from "http";
import app from "./app";

database.getConnection();

http.createServer(app).listen(8080, () => {
  console.log("8080포트에서 서버 돌아가는중...");
});
