import styled from "styled-components";

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
          <AuthType>LOGIN</AuthType>
          <Inputs>
            <CustomInput
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            <CustomInput
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Inputs>
          <Inputs>
            <CustomBtn onClick={onClickLogin}>LOGIN</CustomBtn>
            <CustomSpan onClick={() => setSelectedAuth(true)}>
              회원가입 아직 안함?
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

const Img = styled.div`
  height: 100%;
  width: 50%;
  background-color: black;
`;

const Forms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 50%;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const AuthType = styled.h1`
  font-size: 2.5rem;
  margin-top: 0.5rem;
`;

const CustomInput = styled.input`
  width: 65%;
  padding-left: 1rem;
  margin-top: 1rem;
  height: 3rem;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.425);
  ::placeholder {
    color: gray;
  }
  :focus {
    outline: none;
  }
`;

const CustomSpan = styled.span`
  margin-top: 1rem;
  transition: 0.3s;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;
  :hover {
    color: black;
  }
`;

const CustomBtn = styled.button`
  margin-top: 1rem;
  transition: 0.3s;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  color: gray;
  background-color: white;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.425);
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
