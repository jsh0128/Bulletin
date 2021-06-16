import MainContainer from "container/MainContainer";
import { getPostAsync } from "store/actions/PostAction";
import { RootState } from "store/reducers";

const Home = () => {
  return (
    <>
      <MainContainer />
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  const { store } = ctx;
  await store.dispatch(getPostAsync.request({}));
  const state: RootState = store.getState();

  return { postData: state.postReducer.data };
};

export default Home;
