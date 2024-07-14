import Image from "next/image";
import React from "react";

const OurVisionSection = ({ image, heading, para, flipOnMob, flipOnDesk }: any) => {
  return (
    <div className={`our__vision__section ${flipOnMob ? "flipOnMob" : ""} ${flipOnDesk ? "flipOnDesk" : ""}`}>
      <div className="img">
        <Image src={image} alt="" />
      </div>
      <div className="content">
        <h2 className="heading">{heading}</h2>
        <p className="para">{para}</p>
      </div>
    </div>
  );
};

export default OurVisionSection;
