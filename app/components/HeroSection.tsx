import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import img01 from "../assets/images/banner_01.png";
import img02 from "../assets/images/banner_02.png";
import img03 from "../assets/images/banner_03.png";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const HeorSection = () => {
  const heroSlides = [
    { imgPath: img01, imgAltTag: "", text: `Let's get started with your dream interiors` },
    { imgPath: img02, imgAltTag: "", text: `Let's get started with your dream interiors` },
    { imgPath: img03, imgAltTag: "", text: `Let's get started with your dream interiors` },
  ];
  
  return (
    <div className="bg-white">
      {/* SWIPER SLIDER */}
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        speed={1500}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="md:h-screen sm:h-auto mt-[80px] md:mt-0 bg-[color:var(--primary-light)]"
      >
        {heroSlides &&
          heroSlides?.length > 0 &&
          heroSlides?.map((item, ind) => (
            <SwiperSlide className="relative" key={ind}>
              <Image src={item?.imgPath || ""} alt={item?.imgAltTag || ""} className="h-full w-[100%] ml-auto" />
              {/* <div className="flex absolute items-center top-[60%] translate-y-[-50%] left-[15px] md:left-[40px] lg:left-[80px]">
                <h2 className="text-[24px] md:text-[56px] text-[color:var(--primary)] font-bold max-w-[200px] md:max-w-[500px]">
                  {item?.text || ""}
                </h2>
              </div> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeorSection;
