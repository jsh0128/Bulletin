import { CommentState } from "store/types/CommentType";
import styled from "styled-components";
import { Center } from "styles/globals";
import { AiOutlineUser } from "react-icons/ai";
import TimeCounting from "time-counting";
import Update from "util/enums/Update";
import { CustomImg, CustomInput } from "../Basic/Basic";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { BsCapslock } from "react-icons/bs";

interface CommentItemProps {
  commentData: CommentState;
  userEmail: string;
  HandleComment: (
    type: Update,
    changeName?: string,
    comment_idx?: number
  ) => void;
}

const CommentItem = ({
  commentData,
  userEmail,
  HandleComment,
}: CommentItemProps) => {
  const [onClickModify, setOnClickModify] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <CommentItemArea>
      <ImgArea>
        {commentData.user_profile_img ? (
          <CustomImg
            style={{ width: "3rem", height: "3rem", borderRadius: "4px" }}
            src={commentData.user_profile_img}
          />
        ) : (
          <Img />
        )}
      </ImgArea>
      {!onClickModify ? (
        <>
          <Content>
            <div>
              <Name>{commentData.user_name}</Name>
              <CreateAt>
                {TimeCounting(commentData.created_at, { lang: "ko" })}
              </CreateAt>
            </div>
            {onClickModify && (
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            )}
            {!onClickModify && <span>{commentData.content}</span>}
          </Content>
          {commentData.user_email === userEmail && (
            <CommentChangeBtnArea>
              <CommentChangeBtn
                onClick={() => {
                  setOnClickModify(true);
                  setInputValue(commentData.content);
                }}
              >
                수정
              </CommentChangeBtn>
              <CommentChangeBtn
                onClick={() => {
                  HandleComment(Update.DELETE, null, commentData.idx);
                }}
              >
                삭제
              </CommentChangeBtn>
            </CommentChangeBtnArea>
          )}
        </>
      ) : (
        <>
          <CommentModifyInput
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <UpdateButtonArea>
            <CancelIcon
              onClick={() => {
                setOnClickModify(false);
                setInputValue("");
              }}
            />
            <SendIcon
              onClick={() => {
                HandleComment(Update.MODIFY, inputValue, commentData.idx);
                setInputValue("");
                setOnClickModify(false);
              }}
            />
          </UpdateButtonArea>
        </>
      )}
    </CommentItemArea>
  );
};

const CommentItemArea = styled.div`
  position: relative;
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
`;

const UpdateButtonArea = styled.div`
  font-size: 1.5rem;
  display: flex;
  position: absolute;
  right: 0;
  top: 38%;
  margin-right: 0.5rem;
`;

const CancelIcon = styled(GiCancel)`
  margin-right: 0.2rem;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    color: #707070;
  }
`;

const SendIcon = styled(BsCapslock)`
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    /* font-size: 100rem; */
    color: #707070;
  }
`;

const CommentModifyInput = styled(CustomInput)`
  width: 100%;
  font-size: 1rem;
  margin-left: 0.8rem;
  padding-left: 1rem;
  border: none;
  border-radius: 1rem;
  background: rgb(241, 243, 245);
`;

const CommentChangeBtnArea = styled.div`
  position: absolute;
  color: #b9b9b9;
  font-size: 0.9rem;
  right: 0;
`;

const CommentChangeBtn = styled.span`
  margin-right: 0.2rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #6d6d6d;
  }
`;

const Name = styled.span`
  font-weight: 600;
`;

const CreateAt = styled.span`
  margin-left: 0.8rem;
  font-size: 0.8rem;
  color: #b9b9b9;
  font-weight: 200;
`;

const Img = styled(AiOutlineUser)`
  font-size: 3rem;
`;

const ImgArea = styled(Center)`
  justify-content: center;
  width: 3rem;
  height: 3rem;
`;

const Content = styled.div`
  margin-left: 1rem;
`;

export default CommentItem;
