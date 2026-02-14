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

export default function Home() {
  const enquiryFormRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="main__wrapper">
      <div className="mobile_hide">
        <HeroSection />
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
        heading={"FynDecor – India’s #1 Destination For Customized Curtains, Blinds & Home Decor"}
        paragraph={
          <>
            <section className="seo_content container mx-auto  py-2 prose lg:prose-lg max-w-none space-y-6 leading-relaxed">
              <p>
                Welcome to FynDecor, your trusted partner for customised curtains, stylish blinds,
                sofa covers, cushion covers, rods & channels in Delhi NCR. With 25+ years of expertise,
                we bring premium home decor solutions right to your doorstep – from free home measurement
                to expert stitching and free installation.
              </p>
              <p>
                Whether you want elegant living room curtains, blackout bedroom curtains, modern roller blinds,
                chic zebra blinds, or a fresh new look with sofa covers and cushion covers, we design everything
                to fit your windows and your lifestyle perfectly.
              </p>

              <h3>Why Choose FynDecor for Curtains & Blinds in Delhi NCR?</h3>

              <h4>✅ 25+ Years of Expertise in Curtains & Blinds</h4>
              <p>
                With over two decades in the home decor industry, our skilled team knows exactly how to choose
                the right fabric, style, and fit for every room and budget. From classic velvet curtains to
                modern motorized blinds, we’ve delivered thousands of satisfied homes across Delhi NCR.
              </p>

              <h4>✅ 100% Customised Curtains & Blinds</h4>
              <p>
                We specialise in made-to-measure curtains and blinds that fit your windows like a glove.
                No more struggling with standard sizes – we take precise measurements at your home and stitch
                each curtain and blind to your exact dimensions.
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Custom curtains for bedroom, living room, kitchen, kids’ room, office</li>
                <li>Custom blinds for windows, sliding doors, balconies</li>
                <li>Custom blackout curtains, sheer curtains, net curtains, long curtains, door curtains</li>
              </ul>

              <h4>✅ Free Home Measurement & Free Installation</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Free measurement at your home – expert visit across Delhi NCR.</li>
                <li>Free installation – no extra fitting charges.</li>
                <li>Hassle-free service from fabric selection to final fitting.</li>
              </ul>

              <h4>✅ Premium Quality Fabrics & Designs</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Velvet curtains – rich and luxurious.</li>
                <li>Sheer curtains – soft, airy, and light-filtering.</li>
                <li>Blackout curtains – ideal for bedrooms and home theatres.</li>
                <li>Cotton, linen, polyester, designer prints & more.</li>
              </ul>

              <h4>✅ Complete Home Decor Solutions</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Custom sofa covers</li>
                <li>Cushion covers</li>
                <li>Curtain rods & channels</li>
              </ul>

              <h3>Our Services – Custom Curtains & Blinds for Every Room</h3>

              <h4>1. Custom Curtains for Every Space</h4>

              <h5>Living Room Curtains</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Velvet curtains</li>
                <li>Sheer curtains</li>
                <li>Blackout curtains</li>
                <li>Long & floor-length curtains</li>
              </ul>
              <p>
                We help you choose the right fabric, colour, and style to match your furniture and décor.
              </p>

              <h5>Bedroom Curtains</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Complete privacy & light control</li>
                <li>Blackout curtains for better sleep</li>
                <li>Layered sheer + blackout curtains</li>
              </ul>

              <h5>Kitchen & Dining Room Curtains</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Washable cotton & polyester options</li>
                <li>Short, café-style, and half-length curtains</li>
                <li>Water-resistant fabrics</li>
              </ul>

              <h5>Kids’ Room & Nursery Curtains</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Bright colours & cartoon themes</li>
                <li>Blackout options for better naps</li>
                <li>Soft, child-safe fabrics</li>
              </ul>

              <h5>Office & Commercial Curtains</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Professional office curtains</li>
                <li>Blackout curtains for meeting rooms</li>
                <li>Custom curtains for shops & showrooms</li>
              </ul>

              <h4>2. Stylish Blinds for Modern Homes</h4>

              <h5>Roller Blinds</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Simple and sleek design</li>
                <li>Available in light-filtering & blackout</li>
              </ul>

              <h5>Zebra Blinds</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Modern alternating sheer & solid stripes</li>
                <li>Perfect light and privacy control</li>
              </ul>

              <h5>Roman Blinds</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Soft, elegant foldable fabric</li>
              </ul>

              <h5>Vertical Blinds</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Best for large windows & sliding doors</li>
              </ul>

              <h5>Motorized / Smart Blinds</h5>
              <ul className="list-disc ml-6 space-y-1">
                <li>Remote or app-controlled</li>
                <li>Ideal for modern smart homes</li>
              </ul>

              <h4>3. Sofa Covers & Cushion Covers</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Custom-made sofa covers</li>
                <li>Premium fabrics & design choices</li>
                <li>Stylish cushion covers</li>
              </ul>

              <h4>4. Curtain Rods & Channels</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Metal, wood & plastic rods</li>
                <li>Heavy-duty channels & tracks</li>
                <li>Sample viewing at your home</li>
              </ul>

              <h3>How It Works – Simple 4-Step Process</h3>
              <ol className="list-decimal ml-6 space-y-2">
                <li><strong>Share Your Requirements:</strong> Call, WhatsApp or website.</li>
                <li><strong>Free Home Measurement:</strong> Expert visit with fabric samples.</li>
                <li><strong>Design & Finalise:</strong> Choose fabric, style & pricing.</li>
                <li><strong>Stitching & Free Installation:</strong> Delivered & installed.</li>
              </ol>

              <h3>Popular Curtain & Blind Styles in Delhi NCR</h3>

              <h4>Best Curtains for Delhi Homes</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Velvet curtains</li>
                <li>Sheer curtains</li>
                <li>Blackout curtains</li>
                <li>Net curtains</li>
                <li>Long & floor-length curtains</li>
                <li>Door curtains</li>
              </ul>

              <h4>Best Blinds for Delhi NCR Homes</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Roller blinds</li>
                <li>Zebra blinds</li>
                <li>Roman blinds</li>
                <li>Vertical blinds</li>
                <li>Motorized blinds</li>
              </ul>

              <h3>Why Delhi NCR Homeowners Love FynDecor</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Trusted by thousands across Delhi NCR</li>
                <li>Free home measurement & installation</li>
                <li>25+ years of experience</li>
                <li>Wide range of fabrics & designs</li>
                <li>Expert design suggestions</li>
              </ul>

              <h3>Frequently Asked Questions (FAQs)</h3>

              <h4>1. Do you provide free measurement and installation?</h4>
              <p>Yes, we offer free home measurement and free installation across Delhi NCR.</p>

              <h4>2. What types of curtains do you offer?</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Velvet, sheer, blackout, net, long curtains, door curtains</li>
                <li>Living room, bedroom, kitchen, kids’ room, office curtains</li>
              </ul>

              <h4>3. What types of blinds do you provide?</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Roller, zebra, roman, vertical, motorized blinds</li>
              </ul>

              <h4>4. Can you make custom sofa covers and cushion covers?</h4>
              <p>Yes, custom-made sofa & cushion covers are available.</p>

              <h4>5. Do you show curtain rods and channels at home?</h4>
              <p>Yes, we bring samples during the visit.</p>

              <h4>6. How long does it take to deliver?</h4>
              <p>7–15 days depending on order size and fabric.</p>

              <h4>7. Do you serve commercial spaces?</h4>
              <p>Yes, including offices, clinics, salons & shops.</p>

              <h3>Ready to Redesign Your Home?</h3>
              <p>
                Transform your home with custom curtains, stylish blinds, sofa covers, and cushion covers from
                FynDecor – the most trusted home decor brand in Delhi NCR.
              </p>
              <p>
                📞 Call/WhatsApp us today to book your free home measurement.<br />
                📍 Serving Delhi, Noida, Gurgaon, Faridabad, Ghaziabad & nearby areas.
              </p>

              <h3>SEO Keywords (For Reference)</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Custom curtains Delhi NCR</li>
                <li>Blackout curtains, sheer curtains, net curtains</li>
                <li>Roller blinds, zebra blinds, vertical blinds</li>
                <li>Sofa covers, cushion covers</li>
                <li>Free measurement & installation</li>
              </ul>
            </section>

          </>
        }
      />
    </main>
  );
}
