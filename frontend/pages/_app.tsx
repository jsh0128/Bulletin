import DefaultTemplate from "components/common/DefaultTemplate";
import { AppProps } from "next/app";
import { GlobalStyled, MaxWidth } from "styles/globals";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultTemplate>
        <MaxWidth>
          <Component {...pageProps} />
        </MaxWidth>
        <GlobalStyled />
      </DefaultTemplate>
    </>
  );
}

export default App;
