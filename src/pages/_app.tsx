import "../styles/reset.css";
import { GoogleAnalytics } from "@components";
import { usePageView } from "@hooks";
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
