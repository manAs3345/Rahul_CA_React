import React from "react";
import './index.css';
import { Footer } from "../../../../components/footer";
import { Topnavbar } from "../../../../components/navbar";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsUAEAA() {
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Advisory and Assurance"} bannerSubText={"Ensure accuracy and compliance with our comprehensive audit and assurance services."}/>
            <h1>What do we help out with?</h1>
            <div className="serviceContainer">
              <ol>
              <b><li>Internal Audits</li></b>
              <ul>
                <li>Evaluate controls, manage risks, and enhance governance.</li>
              </ul>
              <b><li>Due Diligence</li></b>
               <ul>
                <li>Thoroughly assess financial information during mergers, acquisitions, or investments.</li>
              </ul>
              <b><li>Financial Advisory</li></b>
              <ul>
                <li>Strategic planning for sustainable success.</li>
              </ul>
            </ol>
            </div>
            <KnowMoreLinker navRoute="/services" linkText="explore more services"/>
            <Footer/>
        </>
    );
}