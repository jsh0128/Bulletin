import useComment from "lib/hooks/useComment";
import { AiOutlineUser } from "react-icons/ai";
import { BsCapslock } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import styled from "styled-components";
import TimeCounting from "time-counting";
import Update from "util/enums/Update";
import { IReply } from "util/types/CommentResponse";
import { Center, CustomImg, CustomInput } from "./Basic/Basic";

interface ReplyItemProps {
  replyData: IReply;
  userEmail: string;
  handleReply: (
    type: Update,
    comment_idx?: number,
    content?: string,
    reply_idx?: number
  ) => void;
}

const ReplyItem = ({ replyData, userEmail, handleReply }: ReplyItemProps) => {
  const {
    onClickModify,
    setOnClickModify,
    inputValue,
    setInputValue,
  } = useComment();

  return (
    <ReplyArea>
      <CommentItemArea>
        <ImgArea>
          {replyData.profile_img ? (
            <CustomImg
              style={{ width: "3rem", height: "3rem", borderRadius: "4px" }}
              src={replyData.profile_img}
            />
          ) : (
            <Img />
          )}
        </ImgArea>
        {!onClickModify ? (
          <>
            <Content>
              <div>
                <Name>{replyData.name}</Name>
                <CreateAt>
                  {TimeCounting(replyData.created_at, { lang: "ko" })}
                </CreateAt>
              </div>
              {onClickModify && (
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              )}
              {!onClickModify && <span>{replyData.content}</span>}
            </Content>
            {replyData.fk_user_email === userEmail && (
              <CommentChangeBtnArea>
                <CommentChangeBtn
                  onClick={() => {
                    setOnClickModify(true);
                    setInputValue(replyData.content);
                  }}
                >
                  수정
                </CommentChangeBtn>
                <CommentChangeBtn
                  onClick={() => {
                    handleReply(Update.DELETE, null, null, replyData.idx);
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
                  handleReply(Update.MODIFY, null, inputValue, replyData.idx);
                  setInputValue("");
                  setOnClickModify(false);
                }}
              />
            </UpdateButtonArea>
          </>
        )}
      </CommentItemArea>
    </ReplyArea>
  );
};

const ReplyArea = styled.div`
  padding-left: 4rem;
`;

const CommentItemArea = styled.div`
  position: relative;
  display: flex;
  margin-top: 1rem;
`;

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
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
  top: 0;
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
  width: 80%;
`;

export default ReplyItem;
