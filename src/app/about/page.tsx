import { Metadata } from "next";
import React from "react";
import PageBanner from "../components/PageBanner";
import OurVisionSection from "../components/OurVisionSection";
import ourVisionImg from "../assets/images/our-vision.png";
import ourServicesImg from "../assets/images/our-services.png";
import WeProvideSection2 from "../components/WeProvideSection2";
import ContactUS from "../components/ContactUs";
import WeDeliverBestQualitySection from "../components/WeDeliverBestQualitySection";

export const metadata: Metadata = {
  title: "Fyn Decor | About Us",
  description: "Crafting Dreams, Designing Homes",
};

const page = () => {
  return (
    <div className="about__us__page">
      <PageBanner />
      <WeProvideSection2 />
      <OurVisionSection
        image={ourVisionImg}
        heading="Our Vision"
        para="Welcome to Furniture Store, your go-to destination for quality and stylish furniture. At Furniture Store, we believe in creating spaces that reflect your personality and lifestyle. Whether you are furnishing your home or office, we offer a wide range of furniture options to suit every taste and budget. Our team of skilled craftsmen ensures that each piece is crafted with precision and attention to detail. We source the finest materials to create furniture that not only looks great but is also durable and functional."
        flipOnDesk={false}
        flipOnMob={true}
      />
      <OurVisionSection
        image={ourServicesImg}
        heading="Our Services"
        para="Visit our showroom or explore our online catalog to discover a curated selection of sofas, chairs, tables, and more. We are committed to providing exceptional customer service and making your furniture shopping experience enjoyable and stress-free."
        flipOnDesk={true}
        flipOnMob={false}
      />
      <div className="about__enquire__box">
        <div className="enquire__banner">
          <h2>Build your own <span>Customize</span> Fabric Curtain for homes</h2>
          <button className='btn'>Enquire Now</button>
        </div>
      </div>
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
    </div>
  );
};

export default page;
