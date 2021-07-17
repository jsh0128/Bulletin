import axios from "axios";
import MainContainer from "container/MainContainer";
import { GET_POST_SUCCESS } from "store/actions/PostAction";

const Home = () => {
  return <MainContainer />;
};

Home.getInitialProps = async (ctx) => {
  const { store } = ctx;
  const { data } = await axios.get(`http://localhost:8080/post/getPost`);

  await store.dispatch({
    type: GET_POST_SUCCESS,
    payload: data?.data,
  });

  return;
};

export default Home;
