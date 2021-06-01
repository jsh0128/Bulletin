import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAsync } from "store/actions/CategoryAction";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { CategoryState } from "store/types/CategoryType";
import { IGetCategoryResponse } from "util/types/CategoryResponse";
import Main from "../components/Main";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<CategoryState[]>();
  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );
  const { getCategoryData, getCategoryErr } = useSelector(
    (state: RootState) => state.GetCategoryReducer
  );

  useEffect(() => {
    dispatch(getPostAsync.request({}));
    dispatch(getCategoryAsync.request({}));
  }, []);

  useEffect(() => {
    setCategory(getCategoryData?.res.data);
  }, [getCategoryData, getCategoryErr]);

  useEffect(() => {
    console.log("글 ", data, getPostErr);
  }, [data, getPostErr]);

  return <Main data={data} category={category} />;
};
export default MainContainer;
