import GithubAuth from "components/GithubAuth";
import { useEffect } from "react";
import qs from "qs";
import { useDispatch } from "react-redux";
import { githubAuthAsync } from "store/actions/UserAction";
import Router from "next/router";

const GithubAuthContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { code } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(githubAuthAsync.request({ code: String(code) }));
    Router.push("/");
  }, []);

  return <GithubAuth />;
};
export default GithubAuthContainer;
