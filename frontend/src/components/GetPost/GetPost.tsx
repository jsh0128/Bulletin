import React from "react";
import { PostState } from "store/types/PostType";

interface GetPostProps {
  data: PostState;
}

const GetPost = ({ data }: GetPostProps) => {
  return (
    <div>
      <h1>{data?.title}</h1>
    </div>
  );
};

export default GetPost;
