import MainContainer from "container/MainContainer";
import { getPostAsync, GET_POST_SUCCESS } from "store/actions/PostAction";
import { RootState } from "store/reducers";

const Home = () => {
  return (
    <>
      <MainContainer />
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  const { store, req } = ctx;
  await store.dispatch(getPostAsync.request({}));
  const state: RootState = store.getState();

  return { postData: state.GetPostReducer.data };
};

export default Home;
