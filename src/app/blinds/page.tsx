import React from "react";
import { getSeoByPath } from "../lib/seo";
import BlindsClient from "./BlindsClient";

const page = async () => {
  const seo = await getSeoByPath("blinds");
  return (
    <BlindsClient seo={seo}/>
  );
};

export default page;
