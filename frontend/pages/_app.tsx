import DefaultTemplate from "components/common/DefaultTemplate";
import { AppContext, AppProps } from "next/app";
import { Center, GlobalStyled, MaxWidth, theme } from "styles/globals";
import wrapper from "store/configureStore";
import withReduxSaga from "next-redux-saga";
import React from "react";
import ErrorHandling from "lib/ErrorHandling";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Center>
        <DefaultTemplate>
          <MaxWidth>
            <Component {...pageProps} theme={theme} />
          </MaxWidth>
          <GlobalStyled />
        </DefaultTemplate>
      </Center>
      <ErrorHandling />
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<any> => {
  const { store } = ctx;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(withReduxSaga(App));
