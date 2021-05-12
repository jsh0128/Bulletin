import DefaultTemplate from "components/common/DefaultTemplate";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "store/configureStore";
import { Center, GlobalStyled, MaxWidth } from "styles/globals";
import { FontStyle } from "../src/styles/font";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
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

export default App;
