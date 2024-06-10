import Link from "next/link";
import React from "react";

const CommonPageSection = ({ pageTitle }: any) => {
  return (
    <section className="common__page__section">
      <div className="relative text-center">
        <h2 className="f1 text-[26px] md:text-[50px] text-[color:var(--white)] font-[400]">
          {pageTitle}
        </h2>
        <nav
          className="flex pt-3 align-center justify-center"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center text-[16px] text-[color:var(--white)] font-semibold"
              >
                <svg
                  className="w-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM13 19H18V9.15745L12 3.7029L6 9.15745V19H11V13H13V19Z"></path>
                </svg>
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-[20px] h-[20px] text-[color:var(--white)] mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                </svg>
                <span className="ms-1 items-center text-[18px] text-[color:var(--primary)] font-bold">
                  {pageTitle}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default CommonPageSection;
