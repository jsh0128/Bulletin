import GetPost from "components/GetPost";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAsync, getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { PostState } from "store/types/PostType";
import { NotificationManager } from "react-notifications";
import history from "next/router";
import Router from "next/router";
import {
  createCommentAsync,
  deleteCommentAsync,
  getCommentAsync,
} from "store/actions/CommentActions";
import { CommentState } from "store/types/CommentType";
import Update from "util/enums/Update";

const GetPostContainer = () => {
  const [postData, setPostData] = useState<PostState>();
  const [comment, setComment] = useState<string>("");
  const [commentData, setCommentData] = useState<CommentState[]>();

  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );
  const { userData } = useSelector((state: RootState) => state.GetInfoReducer);
  const { deletePostData, deletePostErr } = useSelector(
    (state: RootState) => state.deletePostReducer
  );
  const { getCommentData, getCommentErr } = useSelector(
    (state: RootState) => state.getCommentReducer
  );
  const { modifyCommentData, modifyCommentErr } = useSelector(
    (state: RootState) => state.modifyCommentReducer
  );
  const { createCommentData, createCommentErr } = useSelector(
    (state: RootState) => state.createCommentReducer
  );
  const { deleteCommentData, deleteCommentErr } = useSelector(
    (state: RootState) => state.deleteCommentReducer
  );

  // 포스트 삭제 함수
  const onClickDelete = () => {
    Router.push("/");
    dispatch(deletePostAsync.request({ post_idx: Number(query.idx) }));
  };

  const onClickCreateComment = useCallback(() => {
    setComment("");
    dispatch(
      createCommentAsync.request({
        post_idx: Number(query.idx),
        content: comment,
      })
    );
  }, [comment, commentData]);

  const onClickDeleteComment = useCallback((comment_idx: number) => {
    dispatch(deleteCommentAsync.request({ comment_idx: comment_idx }));
  }, []);

  const HandleComment = useCallback(
    (type: Update, comment_idx?: number) => {
      switch (type) {
        case Update.CREATE:
          console.log();
          onClickCreateComment();
          return;
        case Update.MODIFY:
          return;
        case Update.DELETE:
          console.log(comment_idx);
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

  useEffect(() => {
    switch (getPostErr?.response.status) {
      case 404:
        NotificationManager.error("404 Not found", "찾을 수 없음", 1500);
        history.push("/");
        break;
    }
  }, [getPostErr]);

  // 댓글 가져온 후 핸들링
  useEffect(() => {
    setCommentData(getCommentData && getCommentData.data);
    if (getCommentErr) {
      NotificationManager.error("서버 오류입니다", "SERVER ERROR", 1500);
    }
    console.log("댓글 데이터 " + getCommentData, "댓글 오류 " + getCommentErr);
  }, [getCommentData, getCommentErr]);

  // 포스트 삭제 후 핸들링
  useEffect(() => {
    console.log(deletePostData, deletePostErr);
    if (deletePostErr) {
      NotificationManager.error("서버 오류입니다", "SERVER ERROR", 1500);
    }
  }, [deletePostData, deletePostErr]);

  // 댓글 만든 후 데이터 핸들링
  useEffect(() => {
    if (createCommentData && createCommentData?.status === 200) {
      dispatch(getCommentAsync.request({ post_idx: Number(query.idx) }));
    }
    console.log(createCommentData, createCommentErr);
  }, [createCommentData, createCommentErr]);

  // 댓글 삭제 후 데이터 핸들링
  useEffect(() => {
    if (deleteCommentData && deleteCommentData?.status === 200) {
      dispatch(getCommentAsync.request({ post_idx: Number(query.idx) }));
    } else if (deleteCommentErr) {
      NotificationManager.error("서버 오류입니다", "SERVER ERROR", 1500);
    }
    console.log(deleteCommentData, deleteCommentErr);
  }, [deleteCommentData, deleteCommentErr]);

  return (
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
  );
};
export default GetPostContainer;
