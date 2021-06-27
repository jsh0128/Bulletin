import { Response } from "express";

export const handleResponse = (
  response: Response,
  status: number,
  message: string,
  data?: any
) => {
  console.log(message);
  return response.status(status).json({ status, message, data });
};
