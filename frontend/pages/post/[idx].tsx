import GetPostContainer from "container/GetPostContainer";
import { withRouter } from "next/router";

const getPost = () => {
  return (
    <>
      <GetPostContainer />
    </>
  );
};

getPost.getInitialProps = async (context) => {
  return { idx: context.query.idx };
};
export default withRouter(getPost);
