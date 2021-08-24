import DefaultTemplate from "components/common/DefaultTemplate";
import { AppProps } from "next/app";
import { Center, GlobalStyled, MaxWidth, theme } from "styles/theme";
import wrapper from "store/configureStore";
import withReduxSaga from "next-redux-saga";
import React from "react";
import ErrorHandling from "lib/ErrorHandling";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blash</title>
      </Head>
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

export default wrapper.withRedux(withReduxSaga(App));
