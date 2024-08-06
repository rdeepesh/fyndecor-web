"use client";
import React from "react";
import WeDeliverBestQualitySection from "../components/WeDeliverBestQualitySection";
import WeProvideSection2 from "../components/WeProvideSection2";
import ServicePageBanner from "../components/ServicePageBanner";
import curtain_banner_desk from "../assets/images/curtain_banner.webp";
import curtain_banner_mob from "../assets/images/curtain_banner_mob.png";
import ContactUS from "../components/ContactUs";
import ServicesFurnitureRange from "../components/ServicesFurnitureRange";
import Head from "next/head";
const page = () => {  return (
    <>
    <main className="service__page__wrapper curtains">
      <ServicePageBanner
        desktopImg={curtain_banner_desk}
        mobileImg={curtain_banner_mob}
        headText="Get your Home styled by Our Luxury Fabrics"
        headSubText="Curtains"
      />
      <WeProvideSection2 />
      <ServicesFurnitureRange />
      <ContactUS hideContactInfo={true} />
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
    </>
  );
};

export default page;
