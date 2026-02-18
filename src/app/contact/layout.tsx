import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { getSeoByPath } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoByPath("contact");

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    }
  };
}

export default async function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const seo = await getSeoByPath("contact");
  // console.log("--------------->>>>>>>>",typeof seo.scriptTag);
  // console.log("SEO Data in Contact Layout:", seo); // Debugging log
  return (
    <>
      {children}
      <JsonLd data={seo?.scriptTag} />
    </>
  );
}
