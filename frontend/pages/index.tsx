import MainContainer from "container/MainContainer";
import { getPostAsync } from "store/actions/PostAction";
import Head from "next/head";
import { NextPage } from "next";
import wrapper from "store/configureStore";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Blash"}</title>
        <meta
          name="description"
          content="Blash는 개발 정보를 공유하기 위한 블로그 입니다."
        />
        <meta property="og:title" content="Blash" />
        <meta property="og:url" content="http://blash.blog" />
        <meta
          property="og:description"
          content="Blash는 개발 정보를 공유하기 위한 블로그 입니다."
        />
        <meta property="og:url" content="http://blash.blog" />
        <meta name="twitter:title" content="Blash" />
        <meta
          name="twitter:description"
          content="Blash는 개발 정보를 공유하기 위한 블로그 입니다."
        />
      </Head>
      <MainContainer />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { dispatch } = ctx.store;

  dispatch(getPostAsync.request({}));

  return;
});

export default Home;
