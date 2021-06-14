import { useRouter } from "next/router";
import styled from "styled-components";
import AuthModal from "./AuthModal";
import Link from "next/link";
import Logo from "../../../assets/img/Logo.png";

interface HeaderProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  checkPassword: string;
  setCheckPassword: React.Dispatch<React.SetStateAction<string>>;
  onClickLogin: () => void;
  onClickRegister: () => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAuth: boolean;
  setSelectedAuth: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  mailAuthCode: string;
  setMailAuthCode: React.Dispatch<React.SetStateAction<string>>;
  onClickMailCodeSend: () => void;
  loginCheck: boolean;
  Logout: () => void;
  userData: {
    name: string;
    email: string;
    profileImg: string;
    is_admin: boolean;
  };
}

const Header = ({
  id,
  setId,
  name,
  setName,
  password,
  setPassword,
  checkPassword,
  setCheckPassword,
  onClickLogin,
  onClickRegister,
  modal,
  setModal,
  selectedAuth,
  setSelectedAuth,
  loading,
  mailAuthCode,
  setMailAuthCode,
  onClickMailCodeSend,
  loginCheck,
  Logout,
  userData,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <HeaderArea>
      <HeaderStyle>
        <LogoStyle
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={Logo} />
        </LogoStyle>
        <div>
          {loginCheck === true ? (
            <RightSpan>
              {userData?.is_admin && <Link href="/write">글쓰기</Link>}
              <AuthSpan onClick={Logout}>로그아웃</AuthSpan>
            </RightSpan>
          ) : (
            <>
              <AuthSpan
                onClick={() => {
                  setModal(true);
                  setSelectedAuth(false);
                }}
              >
                로그인
              </AuthSpan>
              <AuthSpan
                onClick={() => {
                  setModal(true);
                  setSelectedAuth(true);
                }}
              >
                회원가입
              </AuthSpan>
            </>
          )}
        </div>
      </HeaderStyle>
      {modal && (
        <AuthModal
          id={id}
          setId={setId}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          checkPassword={checkPassword}
          setCheckPassword={setCheckPassword}
          setModal={setModal}
          selectedAuth={selectedAuth}
          setSelectedAuth={setSelectedAuth}
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
          loading={loading}
          mailAuthCode={mailAuthCode}
          setMailAuthCode={setMailAuthCode}
          onClickMailCodeSend={onClickMailCodeSend}
        />
      )}
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05);
  align-items: center;
  z-index: 10;
  justify-content: center;
`;

const HeaderStyle = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoStyle = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const AuthSpan = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const RightSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
