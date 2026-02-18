"use client";
import React from "react";
import WeDeliverBestQualitySection from "../components/WeDeliverBestQualitySection";
import WeProvideSection2 from "../components/WeProvideSection2";
import ServicePageBanner from "../components/ServicePageBanner";
import blind_banner_desk from "../assets/images/blind_banner.webp";
import blind_banner_mob from "../assets/images/blind_banner_mob.png";
import ContactUS from "../components/ContactUs";
import ServicesFurnitureRange from "../components/ServicesFurnitureRange";
import { cleanEditorHtml } from "../lib/cleanHtml";

export default function BlindsClient({ seo }: { seo: any }) {
    const headText = seo.pageHeading.split(" ").slice(0, -1).join(" ");
    const headSubText = seo.pageHeading.split(" ")[seo.pageHeading.split(" ").length - 1];
    return (
        <div className="service__page__wrapper blinds">
            <ServicePageBanner
                desktopImg={blind_banner_desk}
                mobileImg={blind_banner_mob}
                headText={headText}
                headSubText={headSubText}
            />
            <WeProvideSection2 />
            <ServicesFurnitureRange />
            <ContactUS hideContactInfo={true} />
            <WeDeliverBestQualitySection
                heading={seo.footerTitle}
                paragraph={
                    <>
                        <div
                            className="rose lg:prose-lg max-w-none [&_ol]:list-decimal [&_ol]:ml-6 [&_ul]:list-disc [&_ul]:ml-6"
                            dangerouslySetInnerHTML={{
                                __html: cleanEditorHtml(seo.footerDescription),
                            }}
                        />
                    </>
                }
            />
        </div>
    );
};

