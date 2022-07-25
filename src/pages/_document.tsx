import { Html, Head, Main, NextScript } from "next/document";
import { DocumentStyles } from "@styles/document.css";

const Document = () => {
  return (
    <Html lang="jp">
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@700&family=Zen+Kaku+Gothic+New:wght@400;700&&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <body className={DocumentStyles}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
