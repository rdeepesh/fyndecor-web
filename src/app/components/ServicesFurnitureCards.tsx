import React from "react";
import img from "../assets/images/fur_cur_01.png";
import Image from "next/image";
import { useAppDispatch } from "../lib/hooks";
import { modalOpen } from "../lib/features/modalSlice";

const ServicesFurnitureCards = ({ cards }: any) => {
  const dispatch = useAppDispatch();
  return (
    cards?.length && (
      <div className="services__furniture__cards">
        {cards?.map((item: any, key: number) => (
          <div className="card" key={key}>
            <div className="img">
              <Image src={item?.img || img} alt="img" />
            </div>
            <div className="img_tag">
              <span
                className="color_circle"
                style={{ backgroundColor: item?.tagColor }}
              ></span>
              <span className="tag">{item?.tag}</span>
            </div>
            <div className="card_body">
              <h5>
                {item?.cardTitle}
                <button
                  type="button"
                  onClick={() => dispatch(modalOpen({ open: true }))}
                >
                  Enquire Now
                </button>
              </h5>
              <p>{item?.cardPara}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default ServicesFurnitureCards;
