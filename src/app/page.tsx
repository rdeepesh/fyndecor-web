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
  return (
    <main className="main__wrapper">
      <Header />
      <HeroSection />
      <WeProvideSection />
      <ExploreOurFurnitureRange />
      <ExploreOurFurnitureRange2 />
      <EnquiryForm />
      <WhyChooseUs />
      <CustomerFeedback />
      <FAQSection />
      <WeDeliverBestQualitySection />
      <Footer />
    </main>
  );
}
