import { Center } from "common/style/GlobalStyle";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  const redirectUrl = "http://localhost:3000/login";

  return (
    <Container>
      <Center className="header">
        <h1>Blash</h1>
        <Link
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GIT_CLIENT_ID}&redirect_uri=${redirectUrl}`}
        >
          깃허브 로그인
        </Link>
      </Center>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 2px 2px 2px #00000033;
  padding: 5px 0;
  h1 {
    font-size: 25px;
    padding-left: 5px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
