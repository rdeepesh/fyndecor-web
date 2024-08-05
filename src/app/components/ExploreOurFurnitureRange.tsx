import React from "react";
import Image from "next/image";
import freeMeasurement from "../assets/icons/free-measurement.svg";
import noInstallationCharges from "../assets/icons/no-installation-charges.svg";
import yearOfExpertise from "../assets/icons/year-of-expertise.svg";
import Link from "next/link";

const ExploreOurFurnitureRange = () => {
  return (
    <section className="explore__our__furniture__section">
      <h1 className="display_hide">
        Explore Curtains, Blinds <span>Stitching</span> and <span>Fitting</span>{" "}
        Services
      </h1>
      <h2 className="mobile_hide">Explore our Home Decor Services</h2>
      <p className="mobile_hide">
        Enjoy our expert services to improve the decor of your home. We offer
        professional installation and perfect crafting for everything. Easily
        transform your environment with our customized solutions.
      </p>
      <div className="our-usp display_hide">
        <div className="our-usp-div">
          <div className="usp-points">
            <Image src={freeMeasurement} alt="" />
            <p>Free measurement</p>
          </div>
          <div className="usp-points">
            <Image src={noInstallationCharges} alt="" />
            <p>No Installation charges</p>
          </div>
          <div className="usp-points">
            <Image src={yearOfExpertise} alt="" />
            <p>25+ year of expertise</p>
          </div>
        </div>
      </div>
      <div className="furniture__cards">
        <Link href={"/curtain"}>
          <div className="fancy__card card1">
            <div className="content">
              <h5>Curtain</h5>
              <p>
                You will get our service in so many ways to decorate your home
                with Curtains: curtains for bedroom , curtain for window,
                curtain in living room and more.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/blinds"}>
          <div className="fancy__card card2">
            <div className="content">
              <h5>Blinds</h5>
              <p>
                Decorate your home with Blinds- blinds on window, roman blind,
                zebra blind, roller blind and more.
              </p>
            </div>
          </div>
        </Link>
        <div className="fancy__card card3">
          <div className="content">
            <h5>Sofa Cover</h5>
            <p>
              Our experts will create a gorgeous cover for your sofa based on
              the sample you supply.
            </p>
          </div>
        </div>
      </div>
      <div className="furniture__cards row2">
        <div className="fancy__card card4">
          <div className="content">
            <h5>Cushions</h5>
            <p>
              Our experts will create a gorgeous cushion cover for your cushion
              based on the sample you supply.
            </p>
          </div>
        </div>
        <div className="fancy__card card5">
          <div className="content">
            <h5>Channels</h5>
            <p>
              Our team will also show you samples of channel for curtains so
              that it will be easier for you to choose.
            </p>
          </div>
        </div>
        <div className="fancy__card card6">
          <div className="content">
            <h5>Rods</h5>
            <p>
              Our team will also show you samples of rods for curtains so that
              it will be easier for you to choose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurFurnitureRange;
