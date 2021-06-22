import GithubAuth from "components/GithubAuth";
import { useEffect } from "react";
import qs from "qs";
import { useDispatch } from "react-redux";

const GithubAuthContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { code } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
  }, []);

  return <GithubAuth />;
};
export default GithubAuthContainer;
