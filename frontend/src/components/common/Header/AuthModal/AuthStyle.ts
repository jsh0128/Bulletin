import styled from "styled-components";

export const Img = styled.div`
  height: 100%;
  width: 50%;
  background-color: black;
`;

export const Forms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 50%;
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const AuthType = styled.h1`
  font-size: 2.5rem;
  margin-top: 0.5rem;
`;

export const CustomInput = styled.input`
  width: 65%;
  padding-left: 1rem;
  margin-top: 1rem;
  height: 3rem;
  border: none;
  border-radius: 4px;
  border: 1px solid gray;
  ::placeholder {
    color: gray;
  }
  :focus {
    border: 1px solid black;
    outline: none;
  }
`;

export const CustomSpan = styled.span`
  margin-top: 1rem;
  transition: 0.3s;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;
  :hover {
    color: black;
  }
`;

export const CustomBtn = styled.button`
  margin-top: 1rem;
  transition: 0.3s;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  color: gray;
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    border: 1px solid black;
  }
  &:focus {
    outline: none;
  }
`;
