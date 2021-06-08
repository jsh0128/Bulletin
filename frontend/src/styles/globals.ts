import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    font-family: NotoSansKR;
  }
  a{ 
   text-decoration : none;
   color: black;
  }
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MaxWidth = styled.div`
  max-width: 1200px;
  width: 100%;
`;
