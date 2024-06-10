import React from "react";
import Cards from "./Cards";

const InteriorSection = () => {
  return (
    <div className=" px-[15px] md:px-[40px] lg:px-[80px] py-[50px] md:py-[80px] bg-[color:var(--primary-light)]">
      <h2 className="text-[28px] md:text-[36px] text-[color:var(--primary)] text-center">
        Explore Our Furniture Range
      </h2>
      <p className="text-[16px] md:text-[18px] text-[color:var(--black)] text-center max-w-3xl mx-auto">
        Be it end-to-end interiors, renovation or modular solutions, we have it
        all for your home or office. With a wide range of furniture & decor, we
        have your back from start to finish.
      </p>
      <div className="pt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default InteriorSection;
