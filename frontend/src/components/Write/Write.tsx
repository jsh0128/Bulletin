import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";

interface WriteProps {}

const Write = ({}: WriteProps) => {
  return (
    <WriteStyle>
      <Title>
        <Input placeholder="제목" size={3} />
      </Title>
      <Introduction>
        <Input placeholder="소개글" size={2} />
      </Introduction>
      <Content>
        <MDEditor style={{ height: "99%" }} />
      </Content>
    </WriteStyle>
  );
};

const WriteStyle = styled.div`
  display: flex;
  height: calc(100vh - 2.5rem);
  flex-direction: column;
`;

const Title = styled.div`
  height: 10%;
`;

const Introduction = styled.div`
  height: 6%;
`;

const Content = styled.div`
  height: 94%;
  margin-top: 0.8rem;
  overflow-x: hidden;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 99%;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 2rem;
`;

export default Write;
