import React from "react";
import Link from "next/link";
import Image from "next/image";
import check_box_img from "../assets/images/check_box.svg";
import userPromo from "../assets/images/user_promo.png";

const EnquirySection = () => {
  return (
    <>
      <div className="enquiry__section px-[15px] md:px-[40px] lg:px-[80px]">
        <div className="py-[50px] md:py-[80px]">
          <h2 className="text-[28px] md:text-[36px] text-[color:var(--primary)]">
            Crafting Dreams, Designing Homes
          </h2>
          <div className="">
            <ul className="py-5">
              <li className="flex mb-4 items-center">
                <Image src={check_box_img} alt="" />
                <span className="ml-2">Free Measurement</span>
              </li>
              <li className="flex mb-4 items-center">
                <Image src={check_box_img} alt="" />
                <span className="ml-2">No Installation Charges</span>
              </li>
              <li className="flex mb-4 items-center">
                <Image src={check_box_img} alt="" />
                <span className="ml-2">25+ Years of Expertise</span>
              </li>
            </ul>
            <div className="max-w-[220px]">
              <Link
                href="/contact"
                className="block w-full text-center rounded-md px-3.5 py-2 text-white hover:text-[color:var(--primary)] bg-[color:var(--primary)] hover:bg-[color:var(--white)] transition duration-300 ease-in-out"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
        <Image src={userPromo} alt="" />
      </div>
    </>
  );
};

export default EnquirySection;
