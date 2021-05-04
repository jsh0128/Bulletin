import { AppProps } from "next/app";
import { GlobalStyled } from "../styles/globals";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  );
}

export default App;
