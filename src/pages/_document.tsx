import { Html, Head, Main, NextScript } from "next/document";
import baseStyles from "./styles/_ducument.css";

const Document = () => {
  return (
    <Html lang="jp">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@700&family=Zen+Kaku+Gothic+New:wght@400;700&&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>

      <body className={baseStyles}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
