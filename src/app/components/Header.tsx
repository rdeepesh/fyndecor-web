"use client"
import Image from "next/image";
import logo from "../assets/logo/logo.svg";
import Link from "next/link";
import { useState } from "react";
import { MOBILE_NO } from "../utils";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const MenuIconSvg = () => (
    <svg
      width="26"
      height="18"
      viewBox="0 0 26 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5452 2.75H2.04517C1.29517 2.75 0.795166 2.25 0.795166 1.5C0.795166 0.75 1.29517 0.25 2.04517 0.25H24.5452C25.2952 0.25 25.7952 0.75 25.7952 1.5C25.7952 2.25 25.2952 2.75 24.5452 2.75ZM24.5452 10.25H2.04517C1.29517 10.25 0.795166 9.75 0.795166 9C0.795166 8.25 1.29517 7.75 2.04517 7.75H24.5452C25.2952 7.75 25.7952 8.25 25.7952 9C25.7952 9.75 25.2952 10.25 24.5452 10.25ZM24.5452 17.75H2.04517C1.29517 17.75 0.795166 17.25 0.795166 16.5C0.795166 15.75 1.29517 15.25 2.04517 15.25H24.5452C25.2952 15.25 25.7952 15.75 25.7952 16.5C25.7952 17.25 25.2952 17.75 24.5452 17.75Z"
        fill="black"
      />
    </svg>
  );

  return (
    <header className="header">
      <Link href={"/"} className="logo">
        <Image src={logo} alt="" />
      </Link>
      <button type="button" className="menu__toggler" onClick={()=>setIsActive(!isActive)}>
        <MenuIconSvg />
      </button>
      <nav className={isActive ? "active" : ""}>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
        </ul>
      </nav>
      <Link href={`tel:${MOBILE_NO}`} className="btn">
        Call Us: {MOBILE_NO}
      </Link>
    </header>
  );
};

export default Header;
