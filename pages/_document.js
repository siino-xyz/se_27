import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_ID, existsGaId } from "../libs/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {existsGaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              {/* <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-01Q62C3NEV"
              ></script> */}
              <script
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
          <link
            href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@700&family=Zen+Kaku+Gothic+New:wght@400;700&&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <link rel="icon" type="image/png" href="favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
