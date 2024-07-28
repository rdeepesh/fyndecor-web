import React from "react";
import img from "../assets/images/fur_cur_01.png";
import Image from "next/image";

const ServicesFurnitureCards = ({ cards }: any) => {
  return (
    <div className="services__furniture__cards">
      <div className="card">
        <div className="img">
          <Image src={img} alt="img" />
        </div>
        <div className="img_tag">
          <span className="color_circle"></span>
          <span className="tag">Floral Linen Sheer Curtain</span>
        </div>
        <div className="card_body">
          <h5>
            Sheer Curtains
            <button type="button">Enquire Now</button>
          </h5>
          <p>
            Be it end-to-end interiors, renovation or modular solutions, we have
            it all for your home or office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesFurnitureCards;
