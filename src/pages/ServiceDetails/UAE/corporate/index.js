import React from "react";
import './index.css';
import { Footer } from "../../../../components/footer";
import { Topnavbar } from "../../../../components/navbar";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsUAECorporate() {
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Corporate"} bannerSubText={"Unlock growth opportunities with strategic business advisory services."}/>
            <div className="serviceContainer">
              <h1>What do we help out with?</h1>
              <ol>
                <b><li>Company Formation</li></b>
                <ul>
                  <li>Choose the right legal structure for your business—LLC, Free Zone, or Offshore.</li>
                </ul>
                <b><li>Trade License Renewal</li></b>
                <ul>
                  <li>Ensure uninterrupted business operations.</li>
                </ul>
                <b><li>Corporate Secretarial Services</li></b>
                <ul>
                  <li>Comply with company law requirements seamlessly.</li>
                </ul>
              </ol>
            </div>
            <KnowMoreLinker navRoute="/services" linkText="explore more services"/>
            <Footer/>
        </>
    );
}