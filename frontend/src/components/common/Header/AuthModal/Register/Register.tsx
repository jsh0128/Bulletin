// import styled from "styled-components";
import styled from "styled-components";
import {
  Img,
  Forms,
  Inputs,
  AuthType,
  CustomInput,
  CustomSpan,
  CustomBtn,
} from "../AuthStyle";

interface RegisterProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  checkPassword: string;
  setCheckPassword: React.Dispatch<React.SetStateAction<string>>;
  setSelectedAuth: React.Dispatch<React.SetStateAction<boolean>>;
  onClickRegister: () => void;
  mailAuthCode: string;
  setMailAuthCode: React.Dispatch<React.SetStateAction<string>>;
  onClickMailCodeSend: () => void;
}

const Register = ({
  id,
  setId,
  name,
  setName,
  password,
  setPassword,
  checkPassword,
  setCheckPassword,
  setSelectedAuth,
  onClickRegister,
  mailAuthCode,
  setMailAuthCode,
  onClickMailCodeSend,
}: RegisterProps) => {
  return (
    <>
      <Forms>
        <AuthType>회원가입</AuthType>
        <Inputs>
          <EmailForm>
            <CustomInput
              placeholder="이메일"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={{ width: "72%", margin: "0" }}
            />
            <EmailCertBtn onClick={onClickMailCodeSend}>인증</EmailCertBtn>
          </EmailForm>
          <CustomInput
            placeholder="인증 번호"
            value={mailAuthCode}
            onChange={(e) => setMailAuthCode(e.target.value)}
          />
          <CustomInput
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomInput
            placeholder="비밀번호 확인"
            type="password"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <CustomBtn onClick={onClickRegister}>회원가입</CustomBtn>
          <CustomSpan onClick={() => setSelectedAuth(false)}>
            사실 나 로그인 했어
          </CustomSpan>
        </Inputs>
      </Forms>
    </>
  );
};
export default Register;

const EmailForm = styled.div`
  display: flex;
  width: calc(65% + 16px);
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const EmailCertBtn = styled.button`
  width: 18%;
  padding: 0;
  border: 1px solid gray;
  height: 100%;
  transition: 0.3s;
  color: gray;
  background-color: white;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
