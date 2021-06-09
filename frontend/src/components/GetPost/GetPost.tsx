import React from "react";
import { PostState } from "store/types/PostType";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";
import CustomButton from "components/common/CustomButton";

interface GetPostProps {
  data: PostState;
  userData: boolean | null;
}

const GetPost = ({ data, userData }: GetPostProps) => {
  return (
    <PostArea>
      <Center>
        <Title>{data?.title}</Title>
        <Intro>{data?.introduction}</Intro>
        <MDEditor.Markdown
          style={{ marginTop: "0.5rem" }}
          source={data?.content}
        />
        {userData && (
          <Buttons>
            <CustomButton>글 수정</CustomButton>
            <CustomButton>글 삭제</CustomButton>
          </Buttons>
        )}
      </Center>
    </PostArea>
  );
};

const PostArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.div``;

const Center = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  margin-top: 0.5rem;
`;

const Intro = styled.h3`
  margin-top: 1rem;
`;

export default GetPost;
