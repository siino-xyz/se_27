import "../styles/globals.scss";
import "../styles/reset.css";
import Head from "next/head";
import GoogleAnalytics from "../components/GoogleAnalytics";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <GoogleAnalytics />
        <title>Jamstack専門のホームページ制作 | SE-27.com</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
