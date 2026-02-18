import React from "react";
import { getSeoByPath } from "../lib/seo";
import ContactClient from "./ContactClient";

const Contact = async () => {
  const seo = await getSeoByPath("contact");
  return (
    <ContactClient seo={seo} />
  )
};

export default Contact;
