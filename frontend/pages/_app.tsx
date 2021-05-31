import DefaultTemplate from "components/common/DefaultTemplate";
import { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import { Center, GlobalStyled, MaxWidth } from "styles/globals";
import { FontStyle } from "../src/styles/font";
import { configureStore } from "store/configureStore";
import wrapper from "store/configureStore";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

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
      <NotificationContainer />
    </Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<any> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(App);
