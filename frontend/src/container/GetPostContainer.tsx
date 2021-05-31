import GetPost from "components/GetPost";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";

const GetPostContainer = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );

  useEffect(() => {
    dispatch(getPostAsync.request({ postIdx: Number(query.idx) }));
  }, []);

  useEffect(() => {
    console.log(data, getPostErr);
  }, [data, getPostErr]);

  return <GetPost />;
};
export default GetPostContainer;
