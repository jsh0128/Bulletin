import React from "react";
import { PostState } from "store/types/PostType";
import MDEditor from "@uiw/react-md-editor";

interface GetPostProps {
  data: PostState;
}

const GetPost = ({ data }: GetPostProps) => {
  return (
    <div>
      <h1>{data?.title}</h1>
      <h3>{data?.introduction}</h3>
      <MDEditor.Markdown source={data?.content} />
    </div>
  );
};

export default GetPost;
