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

const ImgContainer = styled.div`
  width: 100%;
  background-color: #e4e4e4;
`;

const ImgRatio = styled.div`
  position: relative;
  padding-top: 56.25%; /* 1:1 ratio */
  overflow: hidden;
`;

const ImgCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
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
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  left: 0;
`;
