import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <body>
        <div data-aos="fade-up">
          <Main />
          <NextScript />
          <Script defer src="https://unpkg.com/aos@next/dist/aos.js"></Script>
          <Script defer>
            AOS.init();
          </Script>
        </div>
      </body>
    </Html>
  );
};
