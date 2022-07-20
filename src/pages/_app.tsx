import "../styles/reset.css";
import GoogleAnalytics from "../components/atoms/googleAnalytics/GoogleAnalytics";
import usePageView from "../hooks/usePageView";
import type { AppPropsWithLayout } from "next/app";

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
