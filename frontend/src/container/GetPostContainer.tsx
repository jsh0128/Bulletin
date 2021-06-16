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
  const { data, getPostErr, deletePostData, deletePostErr } = useSelector(
    (state: RootState) => state.postReducer
  );
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
    dispatch(deletePostAsync.request({ post_idx: Number(query.idx) }));
  };

  const onClickCreateComment = useCallback(() => {
    if (!userData) {
      NotificationManager.warning("로그인 해줘~", "댓글 작성 불가", 1500);
    } else if (!comment) {
      NotificationManager.warning("빈칸을 채워줘", "빈칸 채워", 1500);
      return;
    }
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
          onClickCreateComment();
          return;
        case Update.MODIFY:
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
    if (createCommentData && createCommentData?.status === 200) {
      dispatch(getCommentAsync.request({ post_idx: Number(query.idx) }));
    }
  }, [createCommentData]);

  // 댓글 삭제 후 데이터 핸들링
  useEffect(() => {
    if (deleteCommentData && deleteCommentData?.status === 200) {
      dispatch(getCommentAsync.request({ post_idx: Number(query.idx) }));
    }
  }, [deleteCommentData]);

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
