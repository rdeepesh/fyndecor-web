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

const schemaData = [{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://fyndecor.com/"
  },
  "headline": "FynDecor | Customised Curtain & Blinds at Affordable Prices",
  "description": "FynDecor offers high-quality, customized curtains, blinds, cushion covers, at affordable prices. Our customised solutions will improve your living area. Book your appointment now!",
  "image": [
    "https://fyndecor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffur_cur_01.4f6add6a.png&w=640&q=75",
    "https://fyndecor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffur_cur_03.d564b5ad.png&w=640&q=75"
  ],  
  "author": {
    "@type": "Organization",
    "name": "FynDecor",
    "url": "https://fyndecor.com/"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "FynDecor",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fyndecor.com/_next/static/media/logo.c7520c04.svg"
    }
  },
  "datePublished": "2024-09-01",
  "dateModified": "2024-07-16"
}, 
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the difference between curtains and blinds?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The main differences between curtains and blinds are Curtains are made of cloth and hang from a rod above the window, Primarily used for privacy and decoration. Blinds can be made of wood, metal, or plastic and feature panels that can be switched to control light."
    }
  },{
    "@type": "Question",
    "name": "Which is cheaper, curtains or blinds?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Blinds are normally less expensive than curtains, but prices differ depending on material, size, and quality."
    }
  },{
    "@type": "Question",
    "name": "What's best, curtains or blinds?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The option is based on your needs: Curtains are better for decor and protection. Blinds are excellent for light control and an attractive appearance."
    }
  },{
    "@type": "Question",
    "name": "Can I use blinds without curtains?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, blinds can be used without curtains. Blinds can offer both privacy and light control on the inside."
    }
  },{
    "@type": "Question",
    "name": "Which blinds are better for home?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The best blinds for your home are chosen by the following variables. Vertical blinds are suitable for larger windows and sliding doors. Double Roller Blinds for the Bedroom. Roman Blinds for Your Bedroom. Roller Blinds for the Bathroom."
    }
  }]
},

{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Curtains",
    "item": "https://fyndecor.com/curtain"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Blinds",
    "item": "https://fyndecor.com/blinds"  
  }]
},
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "FynDecor",
  "url": "https://fyndecor.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://fyndecor.com/curtain{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
]

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
