import { Metadata } from "next";
import React from "react";
import ContactUS from "../components/ContactUs";

export const metadata: Metadata = {
  title: "Fyn Decor | Contact Us",
  description: "Crafting Dreams, Designing Homes",
};

const Contact = () => {
  return <ContactUS hideContactInfo={false} />
};

export default Contact;
