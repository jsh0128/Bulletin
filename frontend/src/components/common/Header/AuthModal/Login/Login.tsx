import { CustomInput, CustomBtn } from "components/common/Basic/Basic";
import { KeyboardEvent } from "react";
import styled from "styled-components";
import { Inputs, AuthType, CustomSpan } from "../AuthStyle";
import { AiFillGithub } from "react-icons/ai";
import { GITHUB_URL } from "config/config.json";

interface LoginProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onClickLogin: () => void;
  setSelectedAuth: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  keyDownEvent: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Login = ({
  id,
  setId,
  password,
  setPassword,
  onClickLogin,
  setSelectedAuth,
  loading,
  keyDownEvent,
}: LoginProps) => {
  return (
    <>
      {loading ? (
        <Forms>
          <AuthType>로그인</AuthType>
          <Inputs>
            <CustomInput
              onKeyDown={keyDownEvent}
              placeholder="이메일"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            <CustomInput
              placeholder="비밀번호"
              onKeyDown={keyDownEvent}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Inputs>
          <Inputs>
            <CustomBtn onClick={onClickLogin}>로그인</CustomBtn>
            <a href={GITHUB_URL} style={{ width: "100%" }}>
              <GithubLoginBtn>
                <GithubIcon />
                <span>Github Login</span>
              </GithubLoginBtn>
            </a>
            <CustomSpan onClick={() => setSelectedAuth(true)}>
              회원가입 Let's get it~
            </CustomSpan>
          </Inputs>
        </Forms>
      ) : (
        <span>...로딩중</span>
      )}
    </>
  );
};

const Forms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const GithubLoginBtn = styled(CustomBtn)`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GithubIcon = styled(AiFillGithub)`
  margin-right: 1rem;
  font-size: 1.5rem;
`;

export default Login;
