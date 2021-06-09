import { Request, Response } from "express";
import createURL from "../../../../lib/createURL";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    console.log("upload.ts");
    const requestFiles = request.files;
    let files: string[] = [];

    for (let i in requestFiles) {
      files.push(createURL(requestFiles[i].filename));
    }

    console.log(files);
    console.log("파일 업로드 성공");
    handleResponse(response, 200, "파일 업로드 성공", { files });
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, " 서버에러");
    return;
  }
};
