import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategoryAsync,
  deleteCategoryAsync,
  getCategoryAsync,
  getPostCategoryAsync,
  modifyCategoryAsync,
} from "store/actions/CategoryAction";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { CategoryState } from "store/types/CategoryType";
import Update from "util/enums/Update";
import Main from "../components/Main";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<CategoryState[]>();
  const [selected, setSelected] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [createCategory, setCreateCategory] = useState<string>("");
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [update, setUpdate] = useState<string>("");
  const [changeName, setChangeName] = useState<string>("");

  const { data, getPostErr } = useSelector(
    (state: RootState) => state.GetPostReducer
  );

  const { userData } = useSelector((state: RootState) => state.GetInfoReducer);

  const { getCategoryData, getCategoryErr } = useSelector(
    (state: RootState) => state.GetCategoryReducer
  );

  const { createCategoryData, createCategoryErr } = useSelector(
    (state: RootState) => state.createCategoryReducer
  );

  const { modifyCategoryData, modifyCategoryErr } = useSelector(
    (state: RootState) => state.modifyCategoryReducer
  );

  const { deleteCategoryData, deleteCategoryErr } = useSelector(
    (state: RootState) => state.deleteCategoryReducer
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

  const onClickCreateCategory = () => {
    dispatch(createCategoryAsync.request({ category: createCategory }));
    setCreateCategory("");
    setCategoryModal(false);
  };

  const onClickDeleteCategory = (category: string) => {
    dispatch(deleteCategoryAsync.request({ category: category }));
  };

  const onClickModifyCategory = () => {
    dispatch(
      modifyCategoryAsync.request({
        category: changeName,
        changeName: createCategory,
      })
    );
    setCreateCategory("");
    setCategoryModal(false);
  };

  const updateCategory = (type: Update, category?: string) => {
    switch (type) {
      case Update.CREATE:
        onClickCreateCategory();
        setCreateCategory("");
        return;
      case Update.MODIFY:
        onClickModifyCategory();
        setCreateCategory("");
        return;
      case Update.DELETE:
        onClickDeleteCategory(category);

        return;
    }
  };

  useEffect(() => {
    dispatch(getPostAsync.request({}));
    dispatch(getCategoryAsync.request({}));
  }, []);

  useEffect(() => {
    if (
      (createCategoryData && createCategoryData?.status === 200) ||
      (deleteCategoryData && deleteCategoryData?.status === 200) ||
      (modifyCategoryData && modifyCategoryData?.status === 200)
    ) {
      dispatch(getCategoryAsync.request({}));
    }
  }, [createCategoryData, deleteCategoryData, modifyCategoryData]);

  useEffect(() => {}, [modifyCategoryData, modifyCategoryErr]);

  useEffect(() => {}, [createCategoryErr, deleteCategoryErr]);

  useEffect(() => {
    setCategory(getCategoryData?.res);
  }, [getCategoryData, getCategoryErr]);

  useEffect(() => {}, [getPostCategoryData, getPostCategoryErr]);

  useEffect(() => {}, [data, getPostErr]);

  return (
    <>
      <Main
        data={selected ? getPostCategoryData : data}
        category={category}
        selectedCategory={selectedCategory}
        onClickCategoryPost={onClickCategoryPost}
        onClickSelectedAll={onClickSelectedAll}
        is_admin={userData?.is_admin}
        updateCategory={updateCategory}
        categoryModal={categoryModal}
        setCategoryModal={setCategoryModal}
        setCreateCategory={setCreateCategory}
        update={update}
        setUpdate={setUpdate}
        setChangeName={setChangeName}
      />
    </>
  );
};

export default MainContainer;
