import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { getSeoByPath } from "../lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoByPath("about");

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    }
  };
}

export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const seo = await getSeoByPath("about");
  // console.log("SEO Data in About Layout:", seo); // Debugging log
  return (
    <>
      {children}
      <JsonLd data={seo.scriptTag} />
    </>
  );
}
