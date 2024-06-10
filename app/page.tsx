"use client";
import Link from "next/link";
import HeorSection from "./components/HeroSection";
import InteriorSection from "./components/InteriorSection";
import Image from "next/image";
import img01 from "./assets/images/page-banner.png";
import img02 from "./assets/images/curtains_01.jpg";
import img03 from "./assets/images/curtains_02.jpg";
import img04 from "./assets/images/curtains_03.jpg";
import EnquiryForm from "./components/EnquiryForm";
import EnquirySection from "./components/EnquirySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeorSection />
      <EnquirySection />
      <InteriorSection />
      <section className="px-[15px] md:px-[40px] lg:px-[80px] py-[50px] md:py-[80px]">
        <div className="mx-auto">
          <h3 className="text-[28px] md:text-[36px] text-[color:var(--primary)] text-center">
            Customers Also Purchased
          </h3>
          <p className="text-[16px] md:text-[18px] text-[color:var(--black)] text-center max-w-3xl mx-auto">
            Be it end-to-end interiors, renovation or modular solutions, we have
            it all for your home or office. With a wide range of furniture &
            decor, we have your back from start to finish.
          </p>
          <div className="pt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="card lg:h-80">
              <Image
                src={img01}
                alt="FynDecor"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              <div className="card__content">
                <p className="card__title">Sofa</p>
                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>
            <div className="card lg:h-80">
              <Image
                src={img02}
                alt="FynDecor"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              <div className="card__content">
                <p className="card__title">Curtains</p>
                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>
            <div className="card lg:h-80">
              <Image
                src={img03}
                alt="FynDecor"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              <div className="card__content">
                <p className="card__title">Curtains</p>
                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>
            <div className="card lg:h-80">
              <Image
                src={img04}
                alt="FynDecor"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              <div className="card__content">
                <p className="card__title">Curtains</p>
                <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>
            {/* <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={img01}
                  alt="FynDecor"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={"/"}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {"Sofa"}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{"Test one "}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {"some descr"}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section className="px-[15px] md:px-[40px] lg:px-[80px] py-[50px] md:py-[80px] bg-[color:var(--primary)] text-center">
        <h3 className="text-[30px] md:text-[50px] text-[color:var(--white)] font-bold">
          Customised Services
        </h3>
        <p className="text-[20px] text-[color:var(--white)] mb-[40px] max-w-3xl mx-auto">
          {`Can't find what you're looking for? We’ll design your home the way you
          like, keeping your needs and budget in mind.`}
        </p>
        <Link href="/" className="btn__primary_outline">
          Get Free Consultation
        </Link>
      </section> */}
      <section className="px-[15px] md:px-[40px] lg:px-[80px] py-[50px] md:py-[80px]">
        <h3 className="text-[28px] md:text-[36px] text-[color:var(--primary)] text-center">
          We Deliver Best Product Quality
        </h3>
        <p className="py-4">
          Welcome to Furniture Store, your go-to destination for quality and
          stylish furniture. At Furniture Store, we believe in creating spaces
          that reflect your personality and lifestyle. Whether you are
          furnishing your home or office, we offer a wide range of furniture
          options to suit every taste and budget.
        </p>
        <p className="pb-4">
          Our team of skilled craftsmen ensures that each piece is crafted with
          precision and attention to detail. We source the finest materials to
          create furniture that not only looks great but is also durable and
          functional.
        </p>
        <p className="pb-4">
          Visit our showroom or explore our online catalog to discover a curated
          selection of sofas, chairs, tables, and more. We are committed to
          providing exceptional customer service and making your furniture
          shopping experience enjoyable and stress-free.
        </p>
        <p className="pb-4">
          Our team of skilled craftsmen ensures that each piece is crafted with
          precision and attention to detail. We source the finest materials to
          create furniture that not only looks great but is also durable and
          functional.
        </p>
        <p className="pb-4">
          Visit our showroom or explore our online catalog to discover a curated
          selection of sofas, chairs, tables, and more. We are committed to
          providing exceptional customer service and making your furniture
          shopping experience enjoyable and stress-free.
        </p>
      </section>
      <EnquiryForm />
    </main>
  );
}
