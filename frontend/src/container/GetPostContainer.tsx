import GetPost from "components/GetPost";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { PostState } from "store/types/PostType";
import { NotificationManager } from "react-notifications";
import history from "next/router";

const GetPostContainer = () => {
  const [postData, setPostData] = useState<PostState>();
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );
  const { userData } = useSelector((state: RootState) => state.GetInfoReducer);

  useEffect(() => {
    dispatch(getPostAsync.request({ postIdx: Number(query.idx) }));
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

  return (
    <GetPost data={postData} userData={userData ? userData.is_admin : null} />
  );
};
export default GetPostContainer;
