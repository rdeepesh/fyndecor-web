import React from "react";
import Image from "next/image";
import defaultImg01 from "../assets/images/about-us-banner-desktop.png";
import defaultImg02 from "../assets/images/about-us-banner-mobile.png";
import { modalOpen } from "../lib/features/modalSlice";
import { useAppDispatch } from "../lib/hooks";

const ServicePageBanner = ({
  desktopImg,
  mobileImg,
  headText,
  headSubText,
  buttonColor
}: any) => {
  const dispatch = useAppDispatch();

  return (
    <div className="page__banner about">
      <div className="desktop__img">
        <Image src={desktopImg || defaultImg01} alt="" />
      </div>
      <div className="mobile__img">
        <Image src={mobileImg || defaultImg02} alt="" />
      </div>
      <div className="banner__content">
        <h2 className="banner__heading">
          {headText} <span>{headSubText}</span>
        </h2>
        <div className="mob__tags">
          <span>Sheer Curtain</span>
          <span>Blackout curtain</span>
          <span>Room Darkening Curtain</span>
        </div>
        <button
          className="btn"
          onClick={() => dispatch(modalOpen({ open: true }))}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ServicePageBanner;
