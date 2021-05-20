import PostApi from "assets/api/PostApi";
import MainItem from "components/common/MainItem";
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  const MainItemRender = useEffect(() => {
    return (
      <div>
        {Array.isArray(data) &&
          data &&
          data?.map((item, key) => <MainItem key={key} data={item} />)}
      </div>
    );
  }, [data]);

  useEffect(() => {
    console.log(getPostErr);
  }, [getPostErr]);

  return <Main data={data} MainItemRender={MainItemRender} />;
};
export default MainContainer;
