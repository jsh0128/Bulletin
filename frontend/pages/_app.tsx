import DefaultTemplate from "components/common/DefaultTemplate";
import { AppContext, AppProps } from "next/app";
import { Center, GlobalStyled, MaxWidth, theme } from "styles/theme";
import wrapper from "store/configureStore";
import withReduxSaga from "next-redux-saga";
import React from "react";
import ErrorHandling from "lib/ErrorHandling";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Center>
          <DefaultTemplate>
            <MaxWidth>
              <Component {...pageProps} />
            </MaxWidth>
            <GlobalStyled />
          </DefaultTemplate>
        </Center>
      </ThemeProvider>
      <ErrorHandling />
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<any> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(withReduxSaga(App));
