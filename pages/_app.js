import "../styles/globals.scss";
import "../styles/reset.css";
import Head from "next/head";
import GoogleAnalytics from "../components/GoogleAnalytics";
import usePageView from "../hooks/usePageView";

function MyApp({ Component, pageProps }) {
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
