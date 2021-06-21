import React from "react";
import { PostState } from "store/types/PostType";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";
import { CustomButton, BasicInput } from "components/common/Basic/Basic";
import { CommentState } from "store/types/CommentType";
import CommentItem from "components/common/CommentItem";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Update from "util/enums/Update";

interface GetPostProps {
  data: PostState;
  userData: boolean | null;
  userEmail: string;
  onClickDelete: () => void;
  commentData: CommentState[];
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  HandleComment: (
    type: Update,
    changeName?: string,
    comment_idx?: number
  ) => void;
}

const GetPost = ({
  data,
  userData,
  onClickDelete,
  commentData,
  comment,
  setComment,
  HandleComment,
  userEmail,
}: GetPostProps) => {
  return (
    <PostArea userData={userData}>
      <Center>
        <Title>{data?.title}</Title>
        <Intro>{data?.introduction}</Intro>
        <CustomMarkdownRender
          style={{ marginTop: "0.5rem" }}
          source={data?.content}
        />
        <CommentArea>
          <CommentTitle>댓글</CommentTitle>
          <CommentWriteArea>
            <WriteComment
              placeholder="내용을 입력해주세요"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <CommentWriteBtn onClick={() => HandleComment(Update.CREATE)}>
              작성
            </CommentWriteBtn>
          </CommentWriteArea>
          {commentData &&
            commentData?.map((item, key) => (
              <CommentItem
                key={key}
                userEmail={userEmail && userEmail}
                HandleComment={HandleComment}
                commentData={item}
              ></CommentItem>
            ))}
        </CommentArea>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: ${(props: any) => (props.userData ? "none" : "center")};
`;

const CommentWriteBtn = styled(CustomButton)`
  position: absolute;
  right: 0;
  bottom: 0;
  background: #242424;
  color: white;
  padding: 0.1rem 2rem;
  &:hover {
    background: #3d3d3d;
  }
`;

const CustomMarkdownRender = styled(MDEditor.Markdown)`
  & img {
    width: 100%;
  }
`;

const CommentWriteArea = styled.div`
  position: relative;
  margin-top: 0.5rem;
  padding-bottom: 2rem;
  display: flex;
  position: relative;
  margin-bottom: 1.1rem;
  flex-direction: column;
`;

const CommentArea = styled.div`
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const WriteComment = styled.textarea`
  width: 98%;
  height: 7rem;
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  left: 0;
  top: 0;
  border: none;
  border: 1px solid#DEDEDE;
  border-radius: 3px;
`;

const CommentTitle = styled.h3`
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
  height: 2rem;
`;

const Center = styled.div`
  width: 70%;
  /* min-width: 840px; */
`;

const Title = styled.h1`
  margin-top: 0.5rem;
  font-size: 2.7rem;
`;

const Intro = styled.h3`
  margin-top: 1rem;
`;

export default GetPost;
