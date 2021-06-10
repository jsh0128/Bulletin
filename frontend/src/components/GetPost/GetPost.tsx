import React from "react";
import { PostState } from "store/types/PostType";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";
import { CustomButton } from "components/common/Basic/Basic";

interface GetPostProps {
  data: PostState;
  userData: boolean | null;
  onClickDelete: () => void;
}

const GetPost = ({ data, userData, onClickDelete }: GetPostProps) => {
  return (
    <PostArea userData={userData}>
      <Center>
        <Title>{data?.title}</Title>
        <Intro>{data?.introduction}</Intro>
        <MDEditor.Markdown
          style={{ marginTop: "0.5rem" }}
          source={data?.content}
        />
      </Center>
      {userData && (
        <Buttons>
          <CustomButton>글 수정</CustomButton>
          <CustomButton
            onClick={onClickDelete}
            style={{ marginLeft: "0.5rem" }}
          >
            글 삭제
          </CustomButton>
        </Buttons>
      )}
    </PostArea>
  );
};

const PostArea = styled.div<{ userData: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${(props: any) => (props.userData ? "none" : "center")};
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 2rem;
`;

const Center = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  margin-top: 0.5rem;
  font-size: 2.7rem;
`;

const Intro = styled.h3`
  margin-top: 1rem;
`;

export default GetPost;
