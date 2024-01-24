import { dehydrate, QueryClient } from "@tanstack/react-query";
import PostDetailApi from "components/Posts/PostDetail/api/PostDetailApi";
import { GetServerSideProps } from "next";

const PostDetailPage = () => {};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([`post`, id], () =>
    PostDetailApi.getPostDetail(Number(id))
  );

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default PostDetailPage;
