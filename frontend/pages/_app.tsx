import DefaultTemplate from "components/common/DefaultTemplate";
import { AppProps } from "next/app";
import { Center, GlobalStyled, MaxWidth } from "styles/globals";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Center>
        <DefaultTemplate>
          <MaxWidth>
            <Component {...pageProps} />
          </MaxWidth>
          <GlobalStyled />
        </DefaultTemplate>
      </Center>
    </>
  );
}

export default App;
