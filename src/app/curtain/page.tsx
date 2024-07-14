import { Metadata } from "next";
import React from "react";
import WeDeliverBestQualitySection from "../components/WeDeliverBestQualitySection";
import WeProvideSection2 from "../components/WeProvideSection2";

export const metadata: Metadata = {
  title: "Fyn Decor | Curtain",
  description: "Crafting Dreams, Designing Homes",
};

const page = () => {
  return (
    <main className="main__wrapper">
      <section className="services__hero__section">
        
      </section>
      <WeProvideSection2 />
      <WeDeliverBestQualitySection />
    </main>
  );
};

export default page;
