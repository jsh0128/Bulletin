import { Center } from "common/style/GlobalStyle";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Center>
        <h1>Blash</h1>
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
`;

export default Header;
