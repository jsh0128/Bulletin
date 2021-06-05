import DefaultTemplate from "components/common/DefaultTemplate";
import { AppContext, AppProps } from "next/app";
import { Center, GlobalStyled, MaxWidth } from "styles/globals";
import { FontStyle } from "../src/styles/font";
import wrapper from "store/configureStore";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import withReduxSaga from "next-redux-saga";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Center>
        <DefaultTemplate>
          <MaxWidth>
            <Component {...pageProps} />
          </MaxWidth>
          <GlobalStyled />
          <FontStyle />
        </DefaultTemplate>
      </Center>
      <NotificationContainer />
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
