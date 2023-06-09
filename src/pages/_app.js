import "@/styles/scss/main.scss";
import Layout from "../../components/layout/Layout";
import Script from "next/script";
import { Fragment, Suspense } from "react";
import Loader from "../../components/Loader/index";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      {/* GA TAGS */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}')`}
      </Script>
      <Layout>
        <Suspense fallback={<Loader />} />
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
