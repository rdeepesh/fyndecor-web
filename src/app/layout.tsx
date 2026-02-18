import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./lib/StoreProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://fyndecor.com"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GOOGLE FONT-FAMILIES ['Poppins', 'Montserrat', 'Rancho'] */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Montserrat */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Rancho */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rancho&display=swap"
          rel="stylesheet"
        />
        {/* Canonical URL */}
        {/* <link rel="canonical" href="https://fyndecor.com/" /> */}
        <meta name="google-site-verification" content="CG6WojC5x-dZ4013-lf45MPLMWNTw_4n0GUDu0d4ZkI" />
        <script dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KC2Q5W5S');
    `,
        }} />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC2Q5W5S"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
