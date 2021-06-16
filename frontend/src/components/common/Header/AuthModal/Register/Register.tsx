// import styled from "styled-components";
import { KeyboardEvent } from "react";
import ImgUpload from "./ImgUpload";
import RegisterWriteInfo from "./RegisterWriteInfo";

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
  registerPage: boolean;
  setRegisterPage: React.Dispatch<React.SetStateAction<boolean>>;
  profileImg: string | ArrayBuffer | null;
  onClickImgUpload: (File) => void;
  ChangeRegisterPage: () => void;
  keyDownEvent: (e: KeyboardEvent<HTMLInputElement>) => void;
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
  registerPage,
  setRegisterPage,
  profileImg,
  onClickImgUpload,
  ChangeRegisterPage,
  keyDownEvent,
}: RegisterProps) => {
  return (
    <>
      {registerPage ? (
        <ImgUpload
          profileImg={profileImg}
          onClickImgUpload={onClickImgUpload}
          onClickRegister={onClickRegister}
        />
      ) : (
        <RegisterWriteInfo
          id={id}
          setId={setId}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          checkPassword={checkPassword}
          setCheckPassword={setCheckPassword}
          setSelectedAuth={setSelectedAuth}
          mailAuthCode={mailAuthCode}
          setMailAuthCode={setMailAuthCode}
          onClickMailCodeSend={onClickMailCodeSend}
          setRegisterPage={setRegisterPage}
          ChangeRegisterPage={ChangeRegisterPage}
          keyDownEvent={keyDownEvent}
        />
      )}
    </>
  );
};
export default Register;
