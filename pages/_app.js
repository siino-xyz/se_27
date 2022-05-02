import "../styles/globals.scss";
import "../styles/reset.css";
import Head from "next/head";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { existsGaId, GA_ID, pageview } from "../libs/gtag";
import Script from "next/script";
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
        <title>Jamstack専門のホームページ制作 | SE-27.com</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {existsGaId && (
        <>
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            defer
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        page_path: window.location.pathname,
      })`,
            }}
          />
        </>
      )}
      ;
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
