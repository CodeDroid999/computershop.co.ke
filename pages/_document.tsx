import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon/computershop-logo.png" />
      </Head>

      <body className="w-100">
        <Main />
        <NextScript />

        {/* Google tag (gtag.js) */}

      </body>
    </Html>
  );
}
