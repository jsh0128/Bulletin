import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { CustomBtn } from "components/common/Header/AuthModal/AuthStyle";

interface WriteProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  intro: string;
  setIntro: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  onClickWrite: () => void;
}

const Write = ({
  title,
  setTitle,
  intro,
  setIntro,
  content,
  setContent,
  categories,
  setCategories,
  onClickWrite,
}: WriteProps) => {
  return (
    <WriteStyle>
      <Title>
        <Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="제목"
          size={3}
        />
      </Title>
      <Introduction>
        <Input
          value={intro}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
          placeholder="소개글"
          size={2}
        />
      </Introduction>
      <Content>
        <MDEditor value={content} onChange={setContent} height={"99%"} />
      </Content>
      <Btn onClick={onClickWrite}>글쓰기</Btn>
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

const Btn = styled(CustomBtn)`
  margin-top: none;
  margin-bottom: 1rem;
  font-weight: bold;
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
