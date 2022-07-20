import "../styles/reset.css";
import GoogleAnalytics from "../components/atoms/googleAnalytics/GoogleAnalytics";
import usePageView from "../hooks/usePageView";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { AppPropsWithLayout } from "next/app";

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout<P = {}> = AppProps<P> & {
//   Component: NextPageWithLayout<P>;
// };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  usePageView();
  return getLayout(
    <>
      <GoogleAnalytics />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
