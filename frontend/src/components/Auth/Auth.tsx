import React from "react";
import styled from "styled-components";

interface AuthProps {}

const Auth = ({}: AuthProps) => {
  return <AuthStyle></AuthStyle>;
};

const AuthStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Auth;
