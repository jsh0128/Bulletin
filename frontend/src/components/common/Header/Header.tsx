import styled from "styled-components";

interface HeaderProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  checkPassword: string;
  setCheckPassword: React.Dispatch<React.SetStateAction<string>>;
  onClickLogin: () => void;
}

const Header = ({
  id,
  setId,
  password,
  setPassword,
  checkPassword,
  setCheckPassword,
  onClickLogin,
}: HeaderProps) => {
  return (
    <HeaderArea>
      <HeaderStyle>
        <LogoStyle>가나다라마바사</LogoStyle>
        <Login onClick={onClickLogin}>로그인</Login>
      </HeaderStyle>
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
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoStyle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Login = styled.span``;

export default Header;
