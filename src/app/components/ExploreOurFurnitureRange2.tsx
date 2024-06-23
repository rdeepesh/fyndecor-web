import React from "react";
import cur_01 from "../assets/images/curtains_01.jpg";
import Image from "next/image";
import Link from "next/link";

const ExploreOurFurnitureRange2 = () => {
  return (
    <section className="explore__our__furniture__section__2">
      <h2>Explore Our Furniture Range</h2>
      <p>
        Be it end-to-end interiors, renovation or modular solutions, we have it
        all for your home or office. With a wide range of furniture & decor, we
        have your back from start to finish.
      </p>
      <div className="furniture__cards__2">
        <div className="fancy__card">
          <Image src={cur_01} alt="" />
          <div className="content">
            <span className="tag">New</span>
            <h5>Curtains</h5>
            <p>For Make beautiful home</p>
            <div className="price__wrapper">
              <span className="price">₹4000/-</span>
              <Link href={`tel:${process.env.MOBILE_NO}`}>Call Now</Link>
            </div>
          </div>
        </div>
        <div className="fancy__card">
          <Image src={cur_01} alt="" />
          <div className="content">
            <span className="tag">New</span>
            <h5>Curtains</h5>
            <p>For Make beautiful home</p>
            <div className="price__wrapper">
              <span className="price">₹4000/-</span>
              <Link href={`tel:${process.env.MOBILE_NO}`}>Call Now</Link>
            </div>
          </div>
        </div>
        <div className="fancy__card">
          <Image src={cur_01} alt="" />
          <div className="content">
            <span className="tag">New</span>
            <h5>Curtains</h5>
            <p>For Make beautiful home</p>
            <div className="price__wrapper">
              <span className="price">₹4000/-</span>
              <Link href={`tel:${process.env.MOBILE_NO}`}>Call Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurFurnitureRange2;
