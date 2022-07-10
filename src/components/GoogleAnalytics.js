import Script from "next/script";
import { GA_ID, existsGaId } from "../../libs/gtag";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Analytics */}
      {existsGaId && (
        <>
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script
            id="ga"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
            }}
          />
        </>
      )}
      {/* Google Analytics */}
    </>
  );
};

export default GoogleAnalytics;
