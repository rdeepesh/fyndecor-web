"use client"

import { useRef } from "react";
import { Suspense } from "react";
import EnquiryForm from "./components/EnquiryForm";
import ExploreOurFurnitureRange from "./components/ExploreOurFurnitureRange";
import ExploreOurFurnitureRange2 from "./components/ExploreOurFurnitureRange2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WeProvideSection from "./components/WeProvideSection";
import CustomerFeedback from "./components/CustomerFeedback";
import WeDeliverBestQualitySection from "./components/WeDeliverBestQualitySection";
import FAQSection from "./components/FAQSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  const enquiryFormRef = useRef<HTMLDivElement | null>(null);
  const scrollToEnquiryForm = () => {
    if (enquiryFormRef.current) {
      const offset = 350; // Adjust this value to set the margin
      const elementPosition = enquiryFormRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return (
    <main className="main__wrapper">
      <HeroSection onEnquireNowClick={scrollToEnquiryForm} />
      <WeProvideSection />
      <ExploreOurFurnitureRange />
      <ExploreOurFurnitureRange2 />
      <div ref={enquiryFormRef}>
        <EnquiryForm />
      </div>
      <WhyChooseUs />
      <CustomerFeedback />
      <FAQSection />
      <WeDeliverBestQualitySection />
    </main>
  );
}
