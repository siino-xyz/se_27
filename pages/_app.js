import "../styles/globals.scss";
import "../styles/reset.css";
import Head from "next/head";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import GoogleAnalytics from "../components/GoogleAnalytics";
// import { existsGaId, pageview } from "../libs/gtag";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // const router = useRouter();
  // useEffect(() => {
  //   if (!existsGaId) {
  //     return;
  //   }
  //   const handleRouteChange = (path) => {
  //     pageview(path);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

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
