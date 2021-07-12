import { Request, Response } from "express";
import { handleResponse } from "../../../lib/handleResponse";

export default async (request: Request, response: Response) => {
  try {
    const { postIdx } = request.query;
  } catch (err) {
    console.log(err);
    return handleResponse(response, 500, "server error");
  }
};
