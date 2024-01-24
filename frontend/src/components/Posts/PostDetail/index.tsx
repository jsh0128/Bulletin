import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import styled from "styled-components";
import PostDetailApi from "./api/PostDetailApi";

const PostDetail = () => {
  const {
    query: { id },
  } = useRouter();

  const {} = useQuery(["post", id], () =>
    PostDetailApi.getPostDetail(Number(id))
  );

  return <Container></Container>;
};

const Container = styled.div``;

export default PostDetail;
