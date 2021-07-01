import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  a{ 
   text-decoration : none;
   color: black;
  }
`;
const size = {
  mobile: "500px",
  tablet: "767px",
  smallDesktop: "900px",
  desktop: "1250px",
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  smallDesktop: `@media only screen and (max-width: ${size.smallDesktop})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};

export const theme = {
  device,
};

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
