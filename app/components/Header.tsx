"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assets/logo/FYN DECOR LOGO 1.png";
import Link from "next/link";

const navigation: any = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
const decorationList: any = [
  { name: "Curtains", href: "/" },
  { name: "Blinds", href: "/" },
  { name: "Channels", href: "/" },
  { name: "Rods", href: "/" },
  { name: "Cushions", href: "/" },
  { name: "Sofas", href: "/" },
  { name: "Bedroom", href: "/" },
  { name: "Outdoor", href: "/" },
  { name: "Interiors", href: "/" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed bg-white inset-x-0 top-0 z-50">
      <div
        className={
          isScrolled ? "hidden" : "px-[15px] md:px-[40px] lg:px-[80px]"
        }
      >
        <nav
          className="flex items-center justify-between py-2"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-[50px] w-[50px]"
                src={logo}
                alt="fyndecor-logo"
              />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[color:var(--primary)]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-10 items-center">
            {navigation.map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  "text-[16px] font-semibold leading-6 text-[color:var(--primary)] hover:text-[color:var(--black)] transition duration-300 ease-in-out"
                }
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+91 9818010701" className="flex items-center border border-[color:var(--primary)] hover:bg-[color:var(--primary)] py-1 px-2 transition duration-300 ease-in-out font-semibold text-[color:var(--primary)] hover:text-[color:var(--white)] transition duration-300 ease-in-out">
              <svg
                className="w-[30px] h-[30px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
              </svg>
              +91 9818010701
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed bg-[color:var(--primary)] inset-y-0 right-0 z-50 w-full overflow-y-auto px-[15px] py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  className="h-[50px] w-[50px]"
                  src={logo}
                  alt="fyndecor-logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-[color:var(--white)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item: any) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-1 text-[20px] font-semibold text-[color:var(--white)] hover:text-[color:var(--black)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {/* <hr className="border-[color:rgba(var(--black-rgb),0.2)] sm:mx-auto" /> */}
      </div>
      <nav
        className={
          isScrolled
            ? "flex items-center justify-center px-[15px] md:px-[40px] lg:px-[80px] py-2 shadow-2xl bg-[color:var(--primary)]"
            : "flex items-center justify-center px-[15px] md:px-[40px] lg:px-[80px] py-2 bg-[color:var(--primary)]"
        }
        aria-label="Global"
      >
        <div className="flex gap-x-5 lg:gap-x-9 overflow-x-auto">
          {decorationList.map((item: any) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[14px] font-semibold leading-6 text-[color:var(--white)] hover:text-[color:var(--black)] transition duration-300 ease-in-out"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
