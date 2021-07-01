import GetPost from "components/GetPost";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAsync, getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { PostState } from "store/types/PostType";

import { toast } from "react-toastify";

import Router from "next/router";
import {
  createCommentAsync,
  deleteCommentAsync,
  getCommentAsync,
  modifyCommentAsync,
} from "store/actions/CommentActions";
import { CommentState } from "store/types/CommentType";
import Update from "util/enums/Update";
import Loading from "components/common/Loading/Loading";

const GetPostContainer = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState<PostState>();
  const [comment, setComment] = useState<string>("");
  const [commentData, setCommentData] = useState<CommentState[]>();

  const { data } = useSelector((state: RootState) => state.postReducer);
  const { userData } = useSelector((state: RootState) => state.userReducer);
  const {
    getCommentData,
    modifyCommentData,
    createCommentData,
    deleteCommentData,
  } = useSelector((state: RootState) => state.commentReducer);

  // 포스트 삭제 함수
  const onClickDelete = () => {
    Router.push("/");
    dispatch(getPostAsync.request({}));
    dispatch(deletePostAsync.request({ post_idx: Number(query.idx) }));
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
    dispatch(deleteCommentAsync.request({ comment_idx: comment_idx }));
  }, []);

  const HandleComment = useCallback(
    (type: string, changeName?: string, comment_idx?: number) => {
      switch (type) {
        case Update.CREATE:
          onClickCreateComment();
          return;
        case Update.MODIFY:
          onClickModifyComment(comment_idx, changeName);
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
      (deleteCommentData && deleteCommentData?.status === 200)
    ) {
      dispatch(getCommentAsync.request({ post_idx: Number(query.idx) }));
    }
  }, [createCommentData, modifyCommentData, deleteCommentData]);

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
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
export default GetPostContainer;
