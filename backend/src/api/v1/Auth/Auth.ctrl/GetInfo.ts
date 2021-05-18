import { Response } from "express";
import nodemailer from "nodemailer";
import "dotenv/config";
import { handleResponse } from "../../../../lib/handleResponse";
import CertEmail from "../../../../entity/CertEmail";
import { getRepository, Repository } from "typeorm";
import AuthRequest from "../../../../types/AuthRequest";
import User from "../../../../entity/User";

export default async (request: AuthRequest, response: Response) => {
  try {
    const user: User = request.user;

    console.log(user);

    return handleResponse(response, 200, "정보 조회 성공.", user);
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버 오류입니다.");
    return;
  }
};
