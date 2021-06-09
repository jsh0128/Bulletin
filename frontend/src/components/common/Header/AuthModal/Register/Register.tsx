// import styled from "styled-components";
import styled from "styled-components";
import {
  Inputs,
  AuthType,
  CustomInput,
  CustomSpan,
  AuthCustomBtn,
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
        <Inputs>
          <AuthType>회원가입</AuthType>
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
          <AuthCustomBtn onClick={onClickRegister}>회원가입</AuthCustomBtn>
          <CustomSpan onClick={() => setSelectedAuth(false)}>
            사실 나 회원가입 했어
          </CustomSpan>
        </Inputs>
      </Forms>
    </>
  );
};
export default Register;

const EmailForm = styled.div`
  display: flex;
  width: calc(90% + 1rem);
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const EmailCertBtn = styled.button`
  width: 20%;
  padding: 0;
  height: 50px;
  border: 1px solid #707070;
  color: #9c9c9c;
  transition: 0.3s;
  background-color: white;
  border-radius: 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const Forms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;
