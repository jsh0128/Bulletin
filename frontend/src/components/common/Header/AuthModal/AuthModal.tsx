import React from "react";
import styled from "styled-components";
import Register from "./Register";
import Login from "./Login";

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
  loading: boolean;
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
  loading,
}: AuthModalProps) => {
  return (
    <>
      <AuthArea onClick={() => setModal((prev) => !prev)}></AuthArea>
      <AuthModalArea>
        {selectedAuth && <Register />}
        {selectedAuth === false && (
          <Login
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            onClickLogin={onClickLogin}
            setSelectedAuth={setSelectedAuth}
            loading={loading}
          />
        )}
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

export default AuthModal;
