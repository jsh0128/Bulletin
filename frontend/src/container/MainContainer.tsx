import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAsync } from "store/actions/CategoryAction";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { IGetCategoryResponse } from "util/types/CategoryResponse";
import Main from "../components/Main";

const MainContainer = () => {
  const dispatch = useDispatch();
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
    if (getCategoryData === null) {
    } else {
      console.log(getCategoryData);
      console.log(
        "카테고리 ",
        getCategoryData.data && getCategoryData.data,
        getCategoryErr
      );
    }
  }, [getCategoryData, getCategoryErr]);

  useEffect(() => {
    console.log("글 ", data, getPostErr);
  }, [data, getPostErr]);

  return <Main data={data} getCategoryData={getCategoryData} />;
};
export default MainContainer;
