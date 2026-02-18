import React from "react";
import AboutClient from "./AboutClient";
import { getSeoByPath } from "../lib/seo";

const page = async () => {
  const seo = await getSeoByPath("about");
  return (
    <AboutClient seo={seo} />
  );
};

export default page;
