import DefaultTemplate from "components/common/DefaultTemplate";
import { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import { Center, GlobalStyled, MaxWidth } from "styles/globals";
import { FontStyle } from "../src/styles/font";
import { configureStore } from "store/configureStore";
import wrapper from "store/configureStore";
import withReduxSaga from "next-redux-saga";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={configureStore()}>
      <Center>
        <DefaultTemplate>
          <MaxWidth>
            <Component {...pageProps} />
          </MaxWidth>
          <GlobalStyled />
          <FontStyle />
        </DefaultTemplate>
      </Center>
    </Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<any> => {
  let pageProps = {};

  // SSR 때 data population 하면
  if (Component.getInitialProps) {
    // ctx (store 가 들어있음) 를 주입
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(App);
