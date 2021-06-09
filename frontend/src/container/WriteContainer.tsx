import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";
import Write from "../components/Write";
import Router from "next/router";

const WriteContainer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [intro, setIntro] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [categories, setCategories] = useState<string[]>(["React", "node.js"]);
  const { createPostData, createPostErr } = useSelector(
    (state: RootState) => state.CreatePostReducer
  );

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

  const onClickWrite = () => {
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

  useEffect(() => {
    console.log(createPostData);
    console.log(createPostErr);
  }, [createPostData, createPostErr]);

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
    />
  );
};
export default WriteContainer;
