import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/dist/pages/_app";
import React, { useState } from "react";

type PageProps = {
  [key: string]: unknown;
  isWithoutMui: boolean;
};

interface IGetInitialProps {
  Component: NextComponentType<NextPageContext, PageProps>;
  ctx: NextPageContext;
}

const MyApp = ({ pageProps, Component }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: IGetInitialProps) => {
  let pageProps: PageProps = { isWithoutMui: false };

  if (typeof Component.getInitialProps === "function") {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps = {
    ...pageProps,
  };

  return { pageProps };
};

export default MyApp;
