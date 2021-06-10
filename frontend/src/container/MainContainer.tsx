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
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );

  const { userData } = useSelector((state: RootState) => state.GetInfoReducer);

  const { getCategoryData, getCategoryErr } = useSelector(
    (state: RootState) => state.GetCategoryReducer
  );

  const { getPostCategoryData, getPostCategoryErr } = useSelector(
    (state: RootState) => state.GetPostCategoryReducer
  );

  const onClickCategoryPost = (idx: number, category: string) => {
    setSelected(1);
    setSelectedCategory(category);
    dispatch(getPostCategoryAsync.request({ category: idx }));
  };

  const onClickSelectedAll = () => {
    setSelected(0);
    setSelectedCategory("");
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
      <Main
        data={selected ? getPostCategoryData : data}
        category={category}
        selectedCategory={selectedCategory}
        onClickCategoryPost={onClickCategoryPost}
        onClickSelectedAll={onClickSelectedAll}
        is_admin={userData?.is_admin}
      />
    </>
  );
};

export default MainContainer;
