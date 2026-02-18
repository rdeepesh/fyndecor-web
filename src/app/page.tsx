import type { Metadata } from "next";
import { getSeoByPath } from "./lib/seo";
import HomeClient from "./HomeClient";
import JsonLd from "./components/JsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoByPath("home");

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    }
  };
}

export default async function Home() {
  const seo = await getSeoByPath("home");

  return (
    <>
      <HomeClient seo={seo} />

      {/* dynamic schema */}
      <JsonLd data={seo.scriptTag} />
    </>
  );
}
