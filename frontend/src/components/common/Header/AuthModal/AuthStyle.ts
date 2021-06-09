import styled from "styled-components";

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const AuthType = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: white;
  font-weight: bold;
  width: 100%;
`;

export const CustomInput = styled.input`
  width: 90%;
  padding-left: 1rem;
  margin-top: 0.5rem;
  height: 3rem;
  border: 1px solid #707070;
  border-radius: 3px;
  ::placeholder {
    color: #9c9c9c;
  }
  :focus {
    outline: none;
  }
`;

export const CustomSpan = styled.span`
  margin-top: 1rem;
  transition: 0.3s;
  cursor: pointer;
  color: white;
  font-weight: bold;
  :hover {
  }
`;

export const AuthCustomBtn = styled.button`
  margin-top: 1rem;
  transition: 0.3s;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  color: white;
  width: 100%;
  height: 3rem;
  background-color: #343434;
  border: 1px solid #707070;
  border-radius: 28px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    border: 1px solid black;
  }
  &:focus {
    outline: none;
  }
`;
