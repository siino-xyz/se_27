import '../styles/globals.scss'
import Head from 'next/head'
import Script from 'next/script'
import { GA_TRACKING_ID, existsGaId } from '../libs/gtag'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {existsGaId && (
          <>
            <Script 
              defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script 
              id="gtag-init" 
              defer 
              strategy="afterInteractive"
              dangerouslySetInnerHTML ={{
                __html:
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                })`,
              }}
            />
          </>
        )}

        <Script 
          src="https://sdk.form.run/js/v2/formrun.js"
          strategy='lazyOnLoad'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp