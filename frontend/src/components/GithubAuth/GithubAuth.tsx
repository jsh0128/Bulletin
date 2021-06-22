import { Center } from "components/common/Basic/Basic";
import styled from "styled-components";
import ReactLoading from "react-loading";

const GithubAuth = () => {
  return (
    <GithubAuthArea>
      <ReactLoading type="cubes" width="10rem" height="10rem" color="black" />
      <span style={{ marginTop: "2rem" }}>Github Login중..</span>
    </GithubAuthArea>
  );
};

const GithubAuthArea = styled(Center)`
  height: calc(100vh - 2.5rem);
  flex-direction: column;
`;
export default GithubAuth;
