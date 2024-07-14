import { Metadata } from "next";
import React from "react";
import CommonPageSection from "../components/CommonPageSection";

export const metadata: Metadata = {
  title: "Fyn Decor | Privacy Policy",
  description: "Crafting Dreams, Designing Homes",
};

const page = () => {
  return (
    <>
      <CommonPageSection pageTitle="Privacy Policy" />
      <section className="px-[40px] lg:px-[80px] py-[100px]">
        <h3 className="text-[30px] mb-5">Privacy Policy</h3>
        <p className="pb-4">
          Welcome to Furniture Store, your go-to destination for quality and
          stylish furniture. At Furniture Store, we believe in creating spaces
          that reflect your personality and lifestyle. Whether you are
          furnishing your home or office, we offer a wide range of furniture
          options to suit every taste and budget.
        </p>
        <p  className="pb-4">
          Our team of skilled craftsmen ensures that each piece is crafted with
          precision and attention to detail. We source the finest materials to
          create furniture that not only looks great but is also durable and
          functional.
        </p>
        <p  className="pb-4">
          Visit our showroom or explore our online catalog to discover a curated
          selection of sofas, chairs, tables, and more. We are committed to
          providing exceptional customer service and making your furniture
          shopping experience enjoyable and stress-free.
        </p>
        <p className="pb-4">
          Welcome to Furniture Store, your go-to destination for quality and
          stylish furniture. At Furniture Store, we believe in creating spaces
          that reflect your personality and lifestyle. Whether you are
          furnishing your home or office, we offer a wide range of furniture
          options to suit every taste and budget.
        </p>
        <p  className="pb-4">
          Our team of skilled craftsmen ensures that each piece is crafted with
          precision and attention to detail. We source the finest materials to
          create furniture that not only looks great but is also durable and
          functional.
        </p>
        <p  className="pb-4">
          Visit our showroom or explore our online catalog to discover a curated
          selection of sofas, chairs, tables, and more. We are committed to
          providing exceptional customer service and making your furniture
          shopping experience enjoyable and stress-free.
        </p>
      </section>
    </>
  );
};

export default page;
