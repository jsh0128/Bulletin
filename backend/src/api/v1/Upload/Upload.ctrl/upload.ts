import { Request, Response } from "express";
import createURL from "../../../../lib/createURL";
import { handleResponse } from "../../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const requestFiles = request.files;
    console.log(request);
    console.log(requestFiles);
    let files: string[] = [];

    if (!requestFiles.length) {
      console.log("파일 업로드 실패");
      return handleResponse(response, 404, "사진을 전송해주세요");
    }

    for (let i in requestFiles) {
      files.push(createURL(requestFiles[i].filename));
    }

    console.log("파일 업로드 성공");
    handleResponse(response, 200, "파일 업로드 성공", { files });
    return;
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, " 서버에러");
    return;
  }
};
