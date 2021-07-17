import GetPost from "components/GetPost";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAsync, getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { PostState } from "store/types/PostType";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import Router from "next/router";
import {
  createCommentAsync,
  deleteCommentAsync,
  getCommentAsync,
  modifyCommentAsync,
} from "store/actions/CommentActions";
import Update from "util/enums/Update";
import Loading from "components/common/Loading/Loading";
import { IComment } from "util/types/CommentResponse";
import {
  createReplyAsync,
  deleteReplyAsync,
  modifyReplyAsync,
} from "store/actions/ReplyAction";

const GetPostContainer = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState<PostState>();
  const [comment, setComment] = useState<string>("");
  const [commentData, setCommentData] = useState<IComment[]>();

  const { data } = useSelector((state: RootState) => state.postReducer);
  const { userData } = useSelector((state: RootState) => state.userReducer);
  const {
    getCommentData,
    modifyCommentData,
    createCommentData,
    deleteCommentData,
  } = useSelector((state: RootState) => state.commentReducer);

  const { createReplyData, modifyReplyData, deleteReplyData } = useSelector(
    (state: RootState) => state.replyReducer
  );

  const onClickCreateReply = useCallback(
    (comment_idx: number, content: string) => {
      if (!content) {
        toast.warning("내용을 입력해주세요");
      } else {
        dispatch(createReplyAsync.request({ comment_idx, content }));
      }
    },
    []
  );

  const onClickModifyReply = useCallback(
    (reply_idx: number, content: string) => {
      if (!content) {
        toast.warning("내용을 입력해주세요");
      } else {
        dispatch(modifyReplyAsync.request({ reply_idx, content }));
      }
    },
    []
  );

  const onClickDeleteReply = useCallback((reply_idx: number) => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      text: "작성된 답글은 삭제됩니다.",
      showCancelButton: true,
      icon: "warning",
      cancelButtonText: "취소",
      confirmButtonText: "확인",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteReplyAsync.request({ reply_idx }));
      }
    });
  }, []);

  const handleReply = (
    type: Update,
    comment_idx?: number,
    content?: string,
    reply_idx?: number
  ) => {
    switch (type) {
      case Update.CREATE:
        onClickCreateReply(comment_idx, content);
        return;
      case Update.MODIFY:
        onClickModifyReply(reply_idx, content);
        return;
      case Update.DELETE:
        onClickDeleteReply(reply_idx);
        return;
      default:
        return;
    }
  };

  // 포스트 삭제 함수
  const onClickDelete = () => {
    Swal.fire({
      title: "글을 삭제하시겠습니까?",
      text: "작성된 댓글 및 답글은 모두 삭제됩니다.",
      showCancelButton: true,
      icon: "warning",
      cancelButtonText: "취소",
      confirmButtonText: "확인",
    }).then((result) => {
      if (result.isConfirmed) {
        Router.push("/");
        dispatch(getPostAsync.request({}));
        dispatch(deletePostAsync.request({ post_idx: Number(query.idx) }));
      }
    });
  };

  const onClickModifyComment = (idx: number, content: string) => {
    if (!content) {
      toast.warning("내용을 입력하세요");
      return;
    }
    dispatch(modifyCommentAsync.request({ idx: idx, content: content }));
  };

  const onClickCreateComment = useCallback(() => {
    if (!userData) {
      toast.warning("로그인 후 이용 가능합니다");
    } else if (!comment) {
      toast.warning("내용을 입력하세요");
    } else {
      dispatch(
        createCommentAsync.request({
          post_idx: Number(query.idx),
          content: comment,
        })
      );
    }
    setComment("");
  }, [comment, commentData]);

  const onClickDeleteComment = useCallback((comment_idx: number) => {
    Swal.fire({
      title: "댓글을 삭제하시겠습니까?",
      text: "작성된 답글은 모두 삭제됩니다.",
      showCancelButton: true,
      icon: "warning",
      cancelButtonText: "취소",
      confirmButtonText: "확인",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCommentAsync.request({ comment_idx: comment_idx }));
      }
    });
  }, []);

  const HandleComment = useCallback(
    (type: string, content?: string, comment_idx?: number) => {
      switch (type) {
        case Update.CREATE:
          onClickCreateComment();
          return;
        case Update.MODIFY:
          onClickModifyComment(comment_idx, content);
          return;
        case Update.DELETE:
          onClickDeleteComment(comment_idx);
          return;
        default:
          return;
      }
    },
    [comment, commentData]
  );

  useEffect(() => {
    dispatch(getPostAsync.request({ postIdx: Number(query.idx) }));
    dispatch(getCommentAsync.request({ post_idx: Number(query.idx) }));
  }, []);

  useEffect(() => {
    if (data && !Array.isArray(data?.res)) {
      setPostData(data?.res);
    }
  }, [data]);

  // 댓글 가져온 후 핸들링
  useEffect(() => {
    setCommentData(getCommentData && getCommentData.data);
  }, [getCommentData]);

  useEffect(() => {
    if (
      (createCommentData && createCommentData?.status === 200) ||
      (modifyCommentData && modifyCommentData?.status === 200) ||
      (deleteCommentData && deleteCommentData?.status === 200) ||
      (createReplyData && createReplyData?.status === 200) ||
      (modifyReplyData && modifyReplyData?.status === 200) ||
      (deleteReplyData && deleteReplyData?.status === 200)
    ) {
      dispatch(getCommentAsync.request({ post_idx: Number(query.idx) }));
    }
  }, [
    createCommentData,
    modifyCommentData,
    deleteCommentData,
    createReplyData,
    modifyReplyData,
    deleteReplyData,
  ]);

  return (
    <>
      {postData ? (
        <GetPost
          onClickDelete={onClickDelete}
          data={postData}
          userData={userData ? userData.is_admin : null}
          userEmail={userData ? userData.email : null}
          commentData={commentData}
          comment={comment}
          setComment={setComment}
          HandleComment={HandleComment}
          handleReply={handleReply}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
export default GetPostContainer;
