import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { getSeoByPath } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoByPath("terms-and-conditions");

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-and-conditions`,
    }
  };
}

export default async function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const seo = await getSeoByPath("terms-and-conditions");
  // console.log("SEO Data in Terms and Conditions Layout:", seo); // Debugging log
  return (
    <>
      {children}
      <JsonLd data={seo.scriptTag} />
    </>
  );
}
