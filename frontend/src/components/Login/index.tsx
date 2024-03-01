import { useEffect } from "react";
import qs from "qs";
import Router from "next/router";
import GithubAuth from "components/GithubAuth";

const GithubAuthContainer = () => {
  useEffect(() => {
    const { code } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    console.log(code);

    Router.push("/");
  }, []);

  return <GithubAuth />;
};
export default GithubAuthContainer;
