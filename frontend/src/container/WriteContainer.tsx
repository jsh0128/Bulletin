import { useEffect, useState } from "react";
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
  const [preview_img, setPreview_img] = useState<string>(
    "https://s3.ap-northeast-2.amazonaws.com/st.dangidata/hobby_conects/data/adm/lecture_manage/curriculum/094107fc03e8452647ded805edb0f8c4.png"
  );
  const { createPostData, createPostErr } = useSelector(
    (state: RootState) => state.CreatePostReducer
  );

  const onClickWrite = () => {
    dispatch(
      createPostAsync.request({
        title: title,
        introduction: intro,
        content: content,
        categories: categories,
        preview_img: preview_img,
      })
    );
    Router.push("/");
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
