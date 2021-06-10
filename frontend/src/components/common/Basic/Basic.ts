import styled from "styled-components";

export const BasicButton = styled.button`
  background: none;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1rem;
`;

export const CustomButton = styled(BasicButton)`
  padding: 0 1rem;
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BasicInput = styled.input`
  padding-left: 1rem;
  :focus {
    outline: none;
  }
`;
