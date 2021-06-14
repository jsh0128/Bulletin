import GetPostContainer from "container/GetPostContainer";
import { withRouter } from "next/router";
import { getPostAsync } from "store/actions/PostAction";

const getPost = () => {
  return (
    <>
      <GetPostContainer />
    </>
  );
};

getPost.getInitialProps = async (ctx) => {
  const { store, req } = ctx;
  store.dispatch(getPostAsync.request({ postIdx: ctx.query.idx }));

  return { idx: ctx.query.idx };
};
export default withRouter(getPost);
