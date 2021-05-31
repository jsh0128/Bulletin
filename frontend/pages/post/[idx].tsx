import GetPostContainer from "container/GetPostContainer";
import { withRouter } from "next/router";

const getPost = () => {
  return (
    <>
      <GetPostContainer />
    </>
  );
};
export default withRouter(getPost);
