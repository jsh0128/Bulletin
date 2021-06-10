import GetPost from "components/GetPost";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAsync, getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { PostState } from "store/types/PostType";
import { NotificationManager } from "react-notifications";
import history from "next/router";
import Router from "next/router";
import { getCommentAsync } from "store/actions/CommentActions";

const GetPostContainer = () => {
  const [postData, setPostData] = useState<PostState>();
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

  const onClickDelete = () => {
    Router.push("/");
    dispatch(deletePostAsync.request({ post_idx: Number(query.idx) }));
  };

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

  useEffect(() => {
    console.log("댓글 데이터 " + getCommentData, "댓글 오류 " + getCommentErr);
  }, [getCommentData, getCommentErr]);

  useEffect(() => {
    console.log(deletePostData, deletePostErr);
  }, [deletePostData, deletePostErr]);

  return (
    <GetPost
      onClickDelete={onClickDelete}
      data={postData}
      userData={userData ? userData.is_admin : null}
    />
  );
};
export default GetPostContainer;
