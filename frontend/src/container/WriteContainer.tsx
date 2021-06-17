import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import Write from "../components/Write";
import Router from "next/router";
import { CategoryState } from "store/types/CategoryType";
import { getCategoryAsync } from "store/actions/CategoryAction";
import { NotificationManager } from "react-notifications";
import { UPLOAD, uploadAsync } from "store/actions/UploadAction";

const WriteContainer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [intro, setIntro] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectCategory, setSelectCategory] = useState<CategoryState[]>();
  const { modifyPostData } = useSelector(
    (state: RootState) => state.postReducer
  );
  const { getCategoryData, getCategoryErr } = useSelector(
    (state: RootState) => state.CategoryReducer
  );
  const { uploadData } = useSelector((state: RootState) => state.UploadReducer);

  const [select, setSelect] = useState<boolean>(false);

  const getPreviewImg = useCallback(() => {
    if (!content.includes("](")) {
      console.log("이미지를 등록해주세요");
      return false;
    } else {
      const startIdx = content.indexOf("](") + 2;
      const lastIdx = content.slice(startIdx, content.length).indexOf(")");
      return content.slice(startIdx, startIdx + lastIdx);
    }
  }, [content]);

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

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("uploadImg");
    if (e.target.files && e.target.files.length) {
      dispatch(uploadAsync.request({ files: e.target.files[0] }));
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
    setTitle("");
    setIntro("");
    setContent("");
    setCategories([]);
  }, []);

  useEffect(() => {
    setSelectCategory(getCategoryData?.res);
  }, [getCategoryData, getCategoryErr]);

  useEffect(() => {
    if (uploadData) {
      setContent((prev) => prev + "![](" + uploadData.data.files[0] + ")");
    }
  }, [uploadData]);

  useEffect(() => {
    setSelect(false);
    dispatch(getCategoryAsync.request());
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
      uploadImg={uploadImg}
    />
  );
};
export default WriteContainer;
