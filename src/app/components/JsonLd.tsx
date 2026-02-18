export default function JsonLd({ data }: { data: any }) {
  const json = typeof data === "string" ? data : JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: json?.replace(/</g, "\\u003c"),
      }}
    />
  );
}

// "use client"
// import React, { useEffect } from 'react';

// const JsonLd = ({ data }: { data: any }) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'application/ld+json';
//     script.text = JSON.stringify(data);
//     document.head.appendChild(script);
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, [data]);

//   return null;
// };

// export default JsonLd;
