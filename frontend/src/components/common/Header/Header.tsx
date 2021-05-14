import styled from "styled-components";
import AuthModal from "./AuthModal";

interface HeaderProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
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
}

const Header = ({
  id,
  setId,
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
}: HeaderProps) => {
  return (
    <HeaderArea>
      <HeaderStyle>
        <LogoStyle>가나다라마바사</LogoStyle>
        <div>
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
              onClickRegister();
              setModal(true);
              setSelectedAuth(true);
            }}
          >
            회원가입
          </AuthSpan>
        </div>
      </HeaderStyle>
      {modal && (
        <AuthModal
          id={id}
          setId={setId}
          password={password}
          setPassword={setPassword}
          checkPassword={checkPassword}
          setCheckPassword={setCheckPassword}
          setModal={setModal}
          selectedAuth={selectedAuth}
          setSelectedAuth={setSelectedAuth}
          onClickLogin={onClickLogin}
          loading={loading}
        />
      )}
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.085);
  align-items: center;
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
  font-size: 1.5rem;
  font-weight: bold;
`;

const AuthSpan = styled.span`
  margin-right: 0.5rem;
`;

export default Header;
