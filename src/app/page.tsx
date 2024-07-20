"use client";
import { useRef } from "react";
import EnquiryForm from "./components/EnquiryForm";
import ExploreOurFurnitureRange from "./components/ExploreOurFurnitureRange";
import ExploreOurFurnitureRange2 from "./components/ExploreOurFurnitureRange2";
import HeroSection from "./components/HeroSection";
import WeProvideSection from "./components/WeProvideSection";
import CustomerFeedback from "./components/CustomerFeedback";
import WeDeliverBestQualitySection from "./components/WeDeliverBestQualitySection";
import FAQSection from "./components/FAQSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  const enquiryFormRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <main className="main__wrapper">
      <div className="mobile_hide">
      <HeroSection />
      </div>
      <WeProvideSection />
      <ExploreOurFurnitureRange />
      <ExploreOurFurnitureRange2 />
      <div ref={enquiryFormRef}>
        <EnquiryForm />
      </div>
      <WhyChooseUs />
      <CustomerFeedback />
      <FAQSection />
      <WeDeliverBestQualitySection
        heading="We Deliver Best Product Quality"
        paragraph={
          <>
            <p>
              Welcome to Furniture Store, your go-to destination for quality and
              stylish furniture. At Furniture Store, we believe in creating
              spaces that reflect your personality and lifestyle. Whether you
              are furnishing your home or office, we offer a wide range of
              furniture options to suit every taste and budget.
              <br />
              Our team of skilled craftsmen ensures that each piece is crafted
              with precision and attention to detail. We source the finest
              materials to create furniture that not only looks great but is
              also durable and functional.
              <br />
              Visit our showroom or explore our online catalog to discover a
              curated selection of sofas, chairs, tables, and more. We are
              committed to providing exceptional customer service and making
              your furniture shopping experience enjoyable and stress-free.
              <br />
              Our team of skilled craftsmen ensures that each piece is crafted
              with precision and attention to detail. We source the finest
              materials to create furniture that not only looks great but is
              also durable and functional.
              <br />
              Visit our showroom or explore our online catalog to discover a
              curated selection of sofas, chairs, tables, and more. We are
              committed to providing exceptional customer service and making
              your furniture shopping experience enjoyable and stress-free.
            </p>
          </>
        }
      />
    </main>
  );
}
