import "../styles/globals.scss";
import "../styles/reset.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Jamstack専門のホームページ制作 | SE-27.com</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
