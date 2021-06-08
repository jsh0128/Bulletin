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
  // const { data } = await axios.get(`${SERVER}/post/getPost`);
  // return { postData: data.data };
  const { store, req } = ctx;
  store.dispatch(getPostAsync.request({}));
  const state: RootState = store.getState();
  console.log("포스트 데이터 " + state.GetPostReducer.data);

  return { postData: state.GetPostReducer.data };
};

export default Home;
