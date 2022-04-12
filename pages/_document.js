import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@700&family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}