import { Request, Response } from "express";
import axios from "axios";
import { handleResponse } from "../../../../lib/handleResponse";
import User from "../../../../entity/User";
import { getRepository, Repository } from "typeorm";
import { createToken } from "../../../../lib/jwtToken";

export default async (request: Request, response: Response) => {
  try {
    const { code } = request.body;

    const userRepository: Repository<User> = getRepository(User);

    const githubResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      },
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    if (githubResponse.data.error) {
      console.log("검증 오류");
      return handleResponse(response, 400, "검증 오류");
    }

    const githubToken = githubResponse.data.access_token;

    const { data } = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const userInfo = await userRepository.findOne({
      where: { email: data.html_url },
    });

    if (!userInfo) {
      console.log("없는 회원입니다");
      return handleResponse(response, 404, "없는 회원");
    }

    if (userInfo) {
      const token: string = createToken(
        userInfo.email,
        userInfo.name,
        userInfo.profile_img,
        userInfo.is_admin,
        userInfo.is_github
      );

      console.log("로그인 성공");
      return handleResponse(response, 200, "로그인 성공", token);
    }

    return handleResponse(response, 200, "로그인 성공");
  } catch (err) {
    console.log(err);
    return handleResponse(response, 500, "서버 오류");
  }
};
