import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { modifyCommentAsync } from "store/actions/CommentActions";
import { modifyReplyAsync } from "store/actions/ReplyAction";
import CommentType from "util/enums/CommentType";

const useComment = () => {
  const dispatch = useDispatch();
  const [onClickModify, setOnClickModify] = useState<boolean>(false);
  const [comment, setComment] = useState("");
  const [inputValue, setInputValue] = useState<string>("");
  const onClickModifyComment = (
    idx: number,
    content: string,
    commentType: CommentType.COMMENT
  ) => {
    if (!content) {
      toast.warning("내용을 입력하세요");
      return;
    }
    if (commentType === CommentType.COMMENT) {
      dispatch(modifyCommentAsync.request({ idx: idx, content: content }));
    } else if (commentType === CommentType.REPLY) {
      dispatch(modifyReplyAsync.request({ reply_idx: idx, content: content }));
    }
  };

  return {
    onClickModify,
    setOnClickModify,
    inputValue,
    setInputValue,
    onClickModifyComment,
  };
};

export default useComment;
