import Script from "next/script";
import { GA_TRACKING_ID, existsGaId } from "../libs/gtag";

const GoogleAnalytics = () => {
  <>
    {existsGaId && (
      <>
        <Script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
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
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      })`,
          }}
        />
      </>
    )}
    ;
  </>;
};

export default GoogleAnalytics;
