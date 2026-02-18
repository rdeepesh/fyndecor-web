import React from "react";
import { getSeoByPath } from "../lib/seo";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

const page = async () => {
  const seo = await getSeoByPath("privacy-policy");  

  return (
    <PrivacyPolicyClient seo={seo} />
  );
};

export default page;
