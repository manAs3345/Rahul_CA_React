import React from "react";
import { Topnavbar } from "../../../../components/navbar";
import { Footer } from "../../../../components/footer";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import './index.css';
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsGST(){
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"GST and Compliance"} bannerSubText={"Navigate the complex landscape of GST and regulatory compliance."}/>
            <div className="taxationServiceContainer">
                <h1>What do we help out with?</h1>
                <ol>
                <b><li>GST Registration and Filing</li></b>
                <ul>
                    <li>We assist with GST registration, ensuring compliance with registration requirements and procedures.</li>
                    <li>We handle GST filings accurately and on time to avoid penalties and compliance issues.</li>
                    <li>We provide guidance on GST compliance, including classification, input tax credit, and invoice matching.</li>
                </ul>
                <b><li>GST Advisory</li></b>
                <ul>
                <li>We offer expert advice and insights on GST matters, including compliance, planning, and optimization strategies.</li>
                <li>We provide analysis of GST implications for business operations, transactions, and supply chain management.</li>
                <li>We assist with GST audits, assessments, and disputes, ensuring compliance and minimizing risks.</li>
                </ul>
                <b><li>Compliance Services</li></b>
                <ul>
                    <li>We navigate regulatory requirements and ensure compliance with applicable laws, regulations, and standards.</li>
                    <li>We conduct compliance reviews, audits, and assessments to identify gaps and areas of non-compliance.</li>
                    <li>We provide tailored solutions and recommendations to address compliance issues, mitigate risks, and improve governance.</li>
                </ul>
                <b><li>Customs and Excise Compliance</li></b>
                <ul>
                    <li>We ensure compliance with customs and excise regulations, including import-export documentation and procedures.</li>
                    <li>We provide advice and guidance on tariff classifications, valuation, and duty exemptions.</li>
                    <li>We assist with customs audits, investigations, and disputes to minimize exposure and ensure compliance.</li>
                </ul>
                <b><li>Legal Compliance</li></b>
                <ul>
                <li>We ensure compliance with all applicable laws, regulations, and legal requirements, including corporate, labor, and environmental laws.</li>
                <li>We review contracts, agreements, and legal documents for compliance and risk mitigation.</li>
                <li>We provide legal advisory services and support for regulatory filings, disclosures, and compliance documentation.</li>
                </ul>
               </ol>
            </div>
            <KnowMoreLinker linkText={"explore more services"} navRoute={"/services"}/>
            <Footer/>
        </>
        
    )
}