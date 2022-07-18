import "../styles/reset.css";
import GoogleAnalytics from "../components/googleAnalytics/GoogleAnalytics";
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
