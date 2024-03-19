import useCustomRouter from "common/hooks/useCustomRouter";
import { useState } from "react";
import styled from "styled-components";
import { usePostComment } from "../api/useCommentApi";

const CreateComment = () => {
  const {
    query: { id },
  } = useCustomRouter<{ id: number }>();

  const { commentMutate } = usePostComment();

  const [comment, setComment] = useState("");

  const onClickCreateBtn = () => {
    commentMutate({
      content: comment,
      post_idx: id,
    });

    setComment("");
  };

  return (
    <Container>
      <textarea
        placeholder="입력하세요 :)"
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="btn">
        <button onClick={onClickCreateBtn}>작성</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 15px 0 20px 0;
  textarea {
    padding: 10px;
    margin: 0;
    width: calc(100% - 20px);
    resize: none;
    border: 1px solid black;
    border-radius: 3px;
    &:focus {
      outline: none;
    }
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    button {
      padding: 5px 10px;
      border-radius: 2px;
      border: 1px solid black;
      background-color: black;
      color: white;
      transition: 0.2s;
      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    }
  }
`;

export default CreateComment;
