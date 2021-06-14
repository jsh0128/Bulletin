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

export const CustomImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

export const Write = styled.input``;

export const ModalBackground = styled.div`
  background: #0000009b;
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  left: 0;
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

export const CustomBtn = styled.button`
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
