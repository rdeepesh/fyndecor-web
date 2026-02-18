"use client";
import { useRef } from "react";
import EnquiryForm from "./components/EnquiryForm";
import ExploreOurFurnitureRange from "./components/ExploreOurFurnitureRange";
import ExploreOurFurnitureRange2 from "./components/ExploreOurFurnitureRange2";
import HeroSection from "./components/HeroSection";
import WeProvideSection from "./components/WeProvideSection";
import CustomerFeedback from "./components/CustomerFeedback";
import WeDeliverBestQualitySection from "./components/WeDeliverBestQualitySection";
import FAQSection from "./components/FAQSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { cleanEditorHtml } from "./lib/cleanHtml";

export default function HomeClient({ seo }: { seo: any }) {
    const enquiryFormRef = useRef<HTMLDivElement | null>(null);
    // console.log("::::::SEO Data in HomeClient:", seo);

    return (
        <main className="main__wrapper">
            <div className="mobile_hide">
                <HeroSection pageHeading={seo.pageHeading} />
            </div>
            <WeProvideSection />
            <ExploreOurFurnitureRange />
            <ExploreOurFurnitureRange2 />
            <div ref={enquiryFormRef}>
                <EnquiryForm />
            </div>
            <WhyChooseUs />
            <CustomerFeedback />
            <FAQSection />
            <WeDeliverBestQualitySection
                heading={seo.footerTitle}
                paragraph={
                    <>
                        <section className="seo_content container mx-auto  py-2 prose lg:prose-lg max-w-none space-y-6 leading-relaxed">
                            <div
                                className="rose lg:prose-lg max-w-none [&_ol]:list-decimal [&_ol]:ml-6 [&_ul]:list-disc [&_ul]:ml-6"
                                dangerouslySetInnerHTML={{
                                    __html: cleanEditorHtml(seo.footerDescription),
                                }}
                            />
                        </section>

                    </>
                }
            />
        </main>
    );
}
