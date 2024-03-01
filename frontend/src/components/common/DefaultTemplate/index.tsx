import { Center } from "common/style";
import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";

interface Props {
  children: ReactNode;
}

const DefaultTemplate = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Center>
        <Container>{children}</Container>
      </Center>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

export default DefaultTemplate;
