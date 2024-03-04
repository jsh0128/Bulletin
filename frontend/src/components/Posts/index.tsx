import styled from "styled-components";
import { usePostApi } from "./api/usePostApi";
import PostItem from "./PostItem";

const Posts = () => {
  const { data: posts } = usePostApi();

  return (
    <Container>
      {posts?.map((post) => (
        <PostItem key={post.idx} post={post} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px 20px;
  height: 100%;
  ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.device.mobile} {
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr 1fr 1fr;
`;

export default Posts;
