import styled from "styled-components";
import { IPost } from "./types/PostItemType";

interface Props {
  post: IPost;
}

const PostItem = ({ post }: Props) => {
  return <Container>{post.title}</Container>;
};

const Container = styled.div``;

export default PostItem;
