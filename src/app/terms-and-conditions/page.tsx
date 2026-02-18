import React from "react";
import TermsAndConditionsClient from "./TermsAndConditionsClient";
import { getSeoByPath } from "../lib/seo";

const page = async () => {
  const seo = await getSeoByPath("terms-and-conditions");
  return (
    <TermsAndConditionsClient seo={seo} />
  );
};

export default page;
