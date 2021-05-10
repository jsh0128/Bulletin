import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
  }
  body{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MaxWidth = styled.div`
  width: 1400px;
`;
