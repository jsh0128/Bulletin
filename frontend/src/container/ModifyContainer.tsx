import Modify from "components/Modify";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getPostAsync, modifyPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import { CategoryState } from "store/types/CategoryType";
import Router from "next/router";
import { uploadAsync } from "store/actions/UploadAction";
import { getCategoryAsync } from "store/actions/CategoryAction";
import { getInfoAsync } from "store/actions/UserAction";
import { useRouter } from "next/router";
import { MarkDownGetImg } from "lib/MarkDownGetImg";

const ModifyContainer = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [intro, setIntro] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectCategory, setSelectCategory] = useState<CategoryState[]>();

  const { data } = useSelector((state: RootState) => state.postReducer);
  const { getCategoryData, getCategoryErr } = useSelector(
    (state: RootState) => state.CategoryReducer
  );
  const { uploadData } = useSelector((state: RootState) => state.UploadReducer);
  const { userData } = useSelector((state: RootState) => state.userReducer);

  const [select, setSelect] = useState<boolean>(false);

  const getPreviewImg = useCallback(() => {
    return MarkDownGetImg(content)
  }, [content]);

  const selectedCategory = useCallback(
    (category: string) => {
      setSelect(false);
      for (let i in categories) {
        if (categories[i] === category) {
          toast.warning("중복 카테고리 불가");
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

  const handleModifyPost = () => {
    const previewImg = getPreviewImg();
    if (previewImg) {
      dispatch(getPostAsync.request({}));
      dispatch(
        modifyPostAsync.request({
          title: title,
          content: content,
          post_idx: Number(query.idx),
          categories: categories,
        })
      );
      Router.push("/");
    }
  };

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      dispatch(uploadAsync.request({ files: e.target.files[0] }));
    }
  };

  const onClickWrite = () => {
    if (!title || !intro || !content || !categories) {
      toast.warning("빈 칸을 채워주세요");
    } else {
      handleModifyPost();
    }
  };

  useEffect(() => {
    if (data && !Array.isArray(data?.res)) {
      setTitle(data?.res.title);
      setIntro(data?.res.introduction);
      setContent(data?.res.content);
      setCategories(data?.res.category);
    } else {
      dispatch(getPostAsync.request({ postIdx: Number(query.idx) }));
    }
    setSelect(false);
    dispatch(getCategoryAsync.request());
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
    if (!userData) {
      dispatch(getInfoAsync.request());
    } else {
      if (!userData.is_admin) {
        toast.warning("관리자가 아닙니다");
        Router.push("/");
      }
    }
  }, [userData]);

  return (
    <Modify
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
export default ModifyContainer;
