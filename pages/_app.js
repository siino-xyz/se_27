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
      <Head>
        <title>Jamstack専門のホームページ制作 | SE-27.com</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GoogleAnalytics />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
