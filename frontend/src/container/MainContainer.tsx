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
import { PostState } from "store/types/PostType";
import Update from "util/enums/Update";
import Main from "../components/Main";
import { debounce, throttle } from "lodash";

const MainContainer = () => {
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState<PostState[]>();
  const [category, setCategory] = useState<CategoryState[]>();
  const [selected, setSelected] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [createCategory, setCreateCategory] = useState<string>("");
  const [categoryModal, setCategoryModal] = useState<boolean>(false);
  const [update, setUpdate] = useState<string>("");
  const [changeName, setChangeName] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchData, setSearchData] = useState<PostState[]>();

  const { data } = useSelector((state: RootState) => state.postReducer);

  const { userData } = useSelector((state: RootState) => state.userReducer);

  const {
    getCategoryData,
    getCategoryErr,
    createCategoryData,
    modifyCategoryData,
    deleteCategoryData,
    getPostCategoryData,
  } = useSelector((state: RootState) => state.CategoryReducer);

  const onClickCategoryPost = (idx: number, category: string) => {
    setSelected(1);
    setSelectedCategory(category);
    dispatch(getPostCategoryAsync.request({ category: idx }));
    setSearchInput("");
  };

  const onClickSelectedAll = () => {
    setSelected(0);
    setSelectedCategory("");
    setSearchInput("");
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

  const Search = () => {
    console.log("123123");
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

  useEffect(() => {
    if (searchInput && (data || getPostCategoryData)) {
      setDataList(
        Array.isArray(searchData) &&
          searchData.filter(
            (object) =>
              object.title.toLowerCase().includes(searchInput.toLowerCase()) ||
              object.introduction
                .toLowerCase()
                .includes(searchInput.toLowerCase())
          )
      );
    } else if (data || getPostCategoryData) {
      if (selected) {
        setDataList(
          Array.isArray(getPostCategoryData?.res) && getPostCategoryData?.res
        );
        setSearchData(
          Array.isArray(getPostCategoryData?.res) && getPostCategoryData?.res
        );
      } else {
        setDataList(Array.isArray(data?.res) && data?.res);
        setSearchData(Array.isArray(data?.res) && data?.res);
      }
    }
  }, [searchInput, data, getPostCategoryData, searchData]);

  useEffect(() => {
    if (getCategoryData) setCategory(getCategoryData?.res);
  }, [getCategoryData, getCategoryErr]);

  return (
    <>
      {data || getPostCategoryData ? (
        <Main
          data={dataList}
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
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      ) : (
        <span>...Loading</span>
      )}
    </>
  );
};

export default MainContainer;
