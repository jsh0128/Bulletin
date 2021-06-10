import { CommentState } from "store/types/CommentType";
import styled from "styled-components";
import { Center } from "styles/globals";
import { AiOutlineUser } from "react-icons/Ai";
import TimeCounting from "time-counting";
import Update from "util/enums/Update";

interface CommentItemProps {
  commentData: CommentState;
  userEmail: string;
  HandleComment: (type: Update, comment_idx?: number) => void;
}

const CommentItem = ({
  commentData,
  userEmail,
  HandleComment,
}: CommentItemProps) => {
  return (
    <CommentItemArea>
      <ImgArea>
        {commentData.user_profile_img ? (
          <img src={commentData.user_profile_img} />
        ) : (
          <Img />
        )}
      </ImgArea>
      <Content>
        <div>
          <Name>{commentData.user_name}</Name>
          <CreateAt>
            {TimeCounting(commentData.created_at, { lang: "ko" })}
          </CreateAt>
        </div>
        <span>{commentData.content}</span>
      </Content>
      {commentData.user_email === userEmail && (
        <CommentChangeBtnArea>
          <CommentChangeBtn
            onClick={() => HandleComment(Update.MODIFY, commentData.idx)}
          >
            수정
          </CommentChangeBtn>
          <CommentChangeBtn
            onClick={() => HandleComment(Update.DELETE, commentData.idx)}
          >
            삭제
          </CommentChangeBtn>
        </CommentChangeBtnArea>
      )}
    </CommentItemArea>
  );
};

const CommentItemArea = styled.div`
  position: relative;
  display: flex;
  margin-top: 0.5rem;
`;

const CommentChangeBtnArea = styled.div`
  position: absolute;
  right: 0;
`;

const CommentChangeBtn = styled.span`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Name = styled.span`
  font-weight: 600;
`;

const CreateAt = styled.span`
  margin-left: 0.8rem;
  font-size: 0.8rem;
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
