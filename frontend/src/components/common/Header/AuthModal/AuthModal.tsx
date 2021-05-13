import React from "react";
import styled from "styled-components";

interface AuthModalProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  checkPassword: string;
  setCheckPassword: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAuth: boolean;
  setSelectedAuth: React.Dispatch<React.SetStateAction<boolean>>;
  onClickLogin: () => void;
}

const AuthModal = ({
  id,
  setId,
  password,
  setPassword,
  checkPassword,
  setCheckPassword,
  setModal,
  selectedAuth,
  setSelectedAuth,
  onClickLogin,
}: AuthModalProps) => {
  return (
    <>
      <AuthArea onClick={() => setModal((prev) => !prev)}></AuthArea>
      <AuthModalArea>
        <Img />
        <RightArea>
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
            <CustomSpan>회원가입 아직 안함?</CustomSpan>
          </Inputs>
        </RightArea>
      </AuthModalArea>
    </>
  );
};

const AuthArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.425);
`;

const AuthModalArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 101;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: white;
`;

const Img = styled.div`
  height: 100%;
  width: 50%;
  background-color: black;
`;

const RightArea = styled.div`
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

export default AuthModal;
