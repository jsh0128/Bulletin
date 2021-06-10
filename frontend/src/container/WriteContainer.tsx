import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import Write from "../components/Write";
import Router from "next/router";
import { CategoryState } from "store/types/CategoryType";
import { getCategoryAsync } from "store/actions/CategoryAction";

const WriteContainer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [intro, setIntro] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectCategory, setSelectCategory] = useState<CategoryState[]>();
  const { createPostData, createPostErr } = useSelector(
    (state: RootState) => state.CreatePostReducer
  );
  const { getCategoryData, getCategoryErr } = useSelector(
    (state: RootState) => state.GetCategoryReducer
  );
  const { modifyPostData, modifyPostErr } = useSelector(
    (state: RootState) => state.modifyPostReducer
  );

  const [select, setSelect] = useState<boolean>(false);

  const getPreviewImg = () => {
    if (!content.includes("](")) {
      console.log("이미지를 등록해주세요");
      return false;
    } else {
      const startIdx = content.indexOf("](") + 2;
      const lastIdx = content.slice(startIdx, content.length).indexOf(")");
      return content.slice(startIdx, startIdx + lastIdx);
    }
  };

  const selectedCategory = useCallback(
    (category: string) => {
      setSelect(false);
      for (let i in categories) {
        if (categories[i] === category) {
          console.log("중복 카테고리 불가");
          return;
        }
      }
      setCategories([...categories, category]);
    },
    [categories]
  );

  const deleteCategory = useCallback(
    (category: string) => {
      for (let i in categories) {
        setCategories(categories.filter((item) => item !== category));
      }
    },
    [categories]
  );

  console.log(categories);

  const handleCreatePost = () => {
    const previewImg = getPreviewImg();
    if (previewImg) {
      dispatch(
        createPostAsync.request({
          title: title,
          introduction: intro,
          content: content,
          categories: categories,
          preview_img: previewImg,
        })
      );
      Router.push("/");
    }
  };

  const onClickWrite = () => {
    if (!title || !intro || !content || !categories) {
      console.log("빈칸을 채워주세요");
    } else {
      handleCreatePost();
    }
  };

  useEffect(() => {
    setSelectCategory(getCategoryData?.res);
  }, [getCategoryData, getCategoryErr]);

  useEffect(() => {
    console.log(createPostData);
    console.log(createPostErr);
  }, [createPostData, createPostErr]);

  useEffect(() => {
    setSelect(false);
    dispatch(getCategoryAsync.request({}));
  }, []);

  return (
    <Write
      title={title}
      setTitle={setTitle}
      intro={intro}
      setIntro={setIntro}
      content={content}
      setContent={setContent}
      categories={categories}
      setCategories={setCategories}
      onClickWrite={onClickWrite}
      selectCategory={selectCategory}
      select={select}
      setSelect={setSelect}
      deleteCategory={deleteCategory}
      selectedCategory={selectedCategory}
    />
  );
};
export default WriteContainer;
