import { dehydrate, QueryClient } from "@tanstack/react-query";
import Posts from "components/Posts";
import PostApi from "components/Posts/api/PostApi";
import { GetServerSideProps } from "next";
import React from "react";

const Home: React.FC = () => {
  return <Posts />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts"], PostApi.getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
