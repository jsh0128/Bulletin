import React from "react";
import { PostState } from "store/types/PostType";

interface GetPostProps {
  data: PostState;
}

const GetPost = ({ data }: GetPostProps) => {
  return (
    <div>
      <h1>{data?.title}</h1>
      <span>{data?.content}</span>
    </div>
  );
};

export default GetPost;
