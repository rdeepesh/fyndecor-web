import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { getSeoByPath } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoByPath("privacy-policy");

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    }
  };
}

export default async function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const seo = await getSeoByPath("privacy-policy");
  // console.log("SEO Data in Privacy Policy Layout:", seo); // Debugging log
  return (
    <>
      {children}
      <JsonLd data={seo.scriptTag} />
    </>
  );
}
