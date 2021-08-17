import MainContainer from "container/MainContainer";
import { getPostAsync, GET_POST_SUCCESS } from "store/actions/PostAction";

const Home = () => {
  return (
    <>
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
      <MainContainer />
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  const { store } = ctx;
  store.dispatch(getPostAsync.request({}));
  return;
};

export default Home;
