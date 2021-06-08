import {
  Img,
  Forms,
  Inputs,
  AuthType,
  CustomInput,
  CustomSpan,
  CustomBtn,
} from "../AuthStyle";

interface LoginProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onClickLogin: () => void;
  setSelectedAuth: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const Login = ({
  id,
  setId,
  password,
  setPassword,
  onClickLogin,
  setSelectedAuth,
  loading,
}: LoginProps) => {
  return (
    <>
      <Img />
      {loading ? (
        <Forms>
          <AuthType>로그인</AuthType>
          <Inputs>
            <CustomInput
              placeholder="이메일"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            <CustomInput
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Inputs>
          <Inputs>
            <CustomBtn onClick={onClickLogin}>로그인</CustomBtn>
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
export default Login;
