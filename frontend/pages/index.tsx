import MainContainer from "container/MainContainer";
import { getPostAsync, GET_POST_SUCCESS } from "store/actions/PostAction";

const Home = () => {
  return <MainContainer />;
};

Home.getInitialProps = async (ctx) => {
  const { store } = ctx;
  store.dispatch(getPostAsync.request({}));
  return;
};

export default Home;
