import useCustomRouter from "common/hooks/useCustomRouter";
import styled from "styled-components";
import { usePostDetailApi } from "./api/usePostDetailApi";

const PostDetail = () => {
  const {
    query: { id },
  } = useCustomRouter<{ id: string }>();

  const {} = usePostDetailApi(id);

  return <Container></Container>;
};

const Container = styled.div``;

export default PostDetail;
