import React from "react";
import './index.css';
import { Footer } from "../../../../components/footer";
import { Topnavbar } from "../../../../components/navbar";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsUAETaxation() {
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Taxation"} bannerSubText={"Stay compliant and minimize your tax liabilities with our expert tax planning and filing services."}/>
            <div className="serviceContainer">
              <h1>What do we help out with?</h1>
            <ol>
              <b><li>VAT Compliance</li></b>
              <ul>
                <li>Navigate UAE's VAT landscape confidently. We handle registration, returns, and deregistration.</li>
              </ul>
              <b><li>Tax Compliance</li></b>
               <ul>
                <li>From income tax to GST, we ensure timely filing and adherence to the tax norms.</li>
              </ul>
              <b><li>Corporate Tax Advisory</li></b>
              <ul>
                <li>Optimize your tax position strategically.</li>
              </ul>
              <b><li>Excise Tax</li></b>
              <ul>
                <li>Stay compliant with excise tax regulations.</li>
              </ul>
            </ol>
            </div>
            <KnowMoreLinker navRoute="/services" linkText="explore more services"/>
            <Footer/>
        </>
    );
}