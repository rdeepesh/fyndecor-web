import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./lib/StoreProvider";
import JsonLd from './components/JsonLd'  // Import the JsonLd component

export const metadata: Metadata = {
  title: "FynDecor | Customised Curtain & Blinds at Affordable Prices",
  description: "FynDecor offers high-quality, customized curtains, blinds, cushion covers, at affordable prices. Our customised solutions will improve your living area. Book your appointment now!",
  keywords: "customised curtain, customised curtain near me, blinds for windows, curtain for window, curtain for home, curtains for living room, custom curtains, blinds near me, custom blinds, curtain stitching near me, curtain stitching types",
  robots: "index, follow"
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://fyndecor.com/"
  },
  "headline": "best curtain",
  "description": "best curtain decor",
  "image": [
    "https://fyndecor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcurtains_01.a7952393.jpg&w=3840&q=75",
    "https://fyndecor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcurtains_01.a7952393.jpg&w=3840&q=75"
  ],  
  "author": {
    "@type": "Organization",
    "name": "fyndecor",
    "url": "https://fyndecor.com/"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "fyndecor",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fyndecor.com/_next/static/media/logo.c7520c04.svg"
    }
  },
  "datePublished": "2024-09-01",
  "dateModified": "2024-07-16"
};

export default function RootLayout({
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
        <link rel="canonical" href="https://fyndecor.com/" />
        <meta name="google-site-verification" content="CG6WojC5x-dZ4013-lf45MPLMWNTw_4n0GUDu0d4ZkI" />
      </head>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
        <JsonLd data={schemaData} />
      </body>
    </html>
  );
}
