import { Center } from "common/style";
import styled from "styled-components";

const GithubAuth = () => {
  return (
    <GithubAuthArea>
      <span style={{ marginTop: "2rem" }}>Github Login중..</span>
    </GithubAuthArea>
  );
};

const GithubAuthArea = styled(Center)`
  height: calc(100vh - 2.5rem);
  flex-direction: column;
`;
export default GithubAuth;
