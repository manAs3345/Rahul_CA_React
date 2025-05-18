import React from "react";
import { Topnavbar } from "../../../../components/navbar";
import { Footer } from "../../../../components/footer";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import './index.css';
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsAudit(){
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Audit and Assurance"} bannerSubText={"Ensure accuracy and compliance with our comprehensive audit and assurance services."}/>
            <div className="taxationServiceContainer">
                <h1>What do we help out with?</h1>
                <ol>
                        <b><li>Statutory Audit</li></b>
                            <ul>
                            <li>We conduct thorough examination of financial records to ensure compliance with statutory requirements and regulations.</li>
                            <li>We provide insightful analysis of financial performance and operational efficiency.</li>
                            <li>We recommend strategies for improvement based on audit findings and industry best practices.</li>
                            </ul>
                        <b><li>Internal Audit</li></b>
                            <ul>
                            <li>We assess effectiveness of internal controls and risk management processes.</li>
                            <li>We identify weaknesses and vulnerabilities in business operations and financial reporting.</li>
                            <li>We provide recommendations to enhance internal controls and mitigate risks.</li>
                            </ul>
                        <b><li>Special Purpose Audit</li></b>
                            <ul>
                            <li>We conduct specialized audits tailored to meet specific business needs and objectives.</li>
                            <li>We investigate financial irregularities, fraud, and compliance issues.</li>
                            <li>We deliver actionable insights and recommendations to address audit findings and improve business performance.</li>
                            </ul>
                        <b><li>Forensic Audit</li></b>
                            <ul>
                            <li>We conduct in-depth investigation of financial irregularities, fraud, and misconduct.</li>
                            <li>We gather evidence and documentation for legal proceedings and dispute resolution.</li>
                            <li>We provide expert testimony and support in litigation cases.</li>
                            </ul>
                        <b><li>Compliance Audit</li></b>
                            <ul>
                            <li>We ensure compliance with legal and regulatory requirements, including tax laws and corporate governance standards.</li>
                            <li>We identify areas of non-compliance and recommend corrective actions and process improvements.</li>
                            <li>We assess effectiveness of compliance programs and controls.</li>
                            </ul>
            
                </ol>
            </div>
            <KnowMoreLinker linkText={"explore more services"} navRoute={"/services"}/>
            <Footer/>
        </>
        
    )
}