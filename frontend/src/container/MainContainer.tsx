import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import Main from "../components/Main";

const MainContainer = () => {
  const dispatch = useDispatch();
  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );

  useEffect(() => {
    dispatch(getPostAsync.request({}));
  }, []);

  const onClickPost = () => {};

  useEffect(() => {
    console.log(data);
    console.log(getPostErr);
  }, [data, getPostErr]);

  return <Main data={data} onClickPost={onClickPost} />;
};
export default MainContainer;
