import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { handleResponse } from "../../../../lib/handleResponse";
import User from "../../../../entity/User";
import axios from "axios";

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

    const checkEmail = await userRepository.findOne({
      where: { email: data.html_url },
    });

    if (!checkEmail) {
      const user: User = new User();
      user.email = data.html_url;
      user.name = data.name;
      user.is_github = true;
      user.profile_img = data.avatar_url;
      user.password = null;

      await userRepository.save(user);
      return handleResponse(response, 200, "회원가입 성공");
    } else {
      console.log("중복 회원");
      return handleResponse(response, 409, "중복 회원");
    }
  } catch (err) {
    console.log(err);
    handleResponse(response, 500, "서버오류");
  }
};
