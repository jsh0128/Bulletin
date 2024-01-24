import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import PostApi from "./api/PostApi";
import PostItem from "./PostItem";

const Posts = () => {
  const { data: posts } = useQuery(["posts"], PostApi.getPosts);

  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.idx} post={post} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
`;

export default Posts;
