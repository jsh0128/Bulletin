import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryAsync,
  getPostCategoryAsync,
} from "store/actions/CategoryAction";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { CategoryState } from "store/types/CategoryType";
import Main from "../components/Main";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<CategoryState[]>();
  const [selected, setSelected] = useState<number>(0);

  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );

  const { getCategoryData, getCategoryErr } = useSelector(
    (state: RootState) => state.GetCategoryReducer
  );

  const { getPostCategoryData, getPostCategoryErr } = useSelector(
    (state: RootState) => state.GetPostCategoryReducer
  );

  const onClickCategoryPost = (idx: number) => {
    setSelected(1);
    dispatch(getPostCategoryAsync.request({ category: idx }));
  };

  const onClickSelectedAll = () => {
    setSelected(0);
    dispatch(getPostAsync.request({}));
  };

  useEffect(() => {
    dispatch(getPostAsync.request({}));
    dispatch(getCategoryAsync.request({}));
  }, []);

  useEffect(() => {
    setCategory(getCategoryData?.res);
    console.log(getCategoryData?.res);
  }, [getCategoryData, getCategoryErr]);

  useEffect(() => {
    console.log(getPostCategoryData, getPostCategoryErr);
  }, [getPostCategoryData, getPostCategoryErr]);

  useEffect(() => {
    console.log(data);
  }, [data, getPostErr]);

  return (
    <>
      {selected ? (
        <Main
          data={getPostCategoryData}
          category={category}
          onClickCategoryPost={onClickCategoryPost}
          onClickSelectedAll={onClickSelectedAll}
        />
      ) : (
        <Main
          data={data}
          category={category}
          onClickCategoryPost={onClickCategoryPost}
          onClickSelectedAll={onClickSelectedAll}
        />
      )}
    </>
  );
};

export default MainContainer;
