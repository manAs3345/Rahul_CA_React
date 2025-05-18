import React from "react";
import { Topnavbar } from "../../../../components/navbar";
import { Footer } from "../../../../components/footer";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import './index.css';
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsBA(){
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Business Advisory"} bannerSubText={"Unlock growth opportunities with strategic business advisory services."}/>
            <div className="taxationServiceContainer">
                <h1>What do we help out with?</h1>
                <ol>
                    <b><li>Financial Planning and Analysis</li></b>
                    <ul>
                        <li>We develop comprehensive financial plans aligned with business goals and objectives.</li>
                        <li>We conduct in-depth financial analysis to identify trends, opportunities, and risks.</li>
                        <li>We provide strategic recommendations to optimize financial performance and achieve sustainable growth.</li>
                    </ul>
                    <b><li>Risk Management</li></b>
                    <ul>
                        <li>We assess and mitigate risks across all aspects of business operations and financial activities.</li>
                        <li>We implement robust risk management frameworks and controls.</li>
                        <li>We provide ongoing monitoring and evaluation to ensure effective risk mitigation and compliance.</li>
                    </ul>
                    <b><li>Strategic Consulting</li></b>
                    <ul>
                        <li>We offer strategic guidance and support to address complex business challenges and opportunities.</li>
                        <li>We assist with strategic planning, market analysis, and competitive positioning.</li>
                        <li>We develop and execute customized growth strategies to drive business success and competitiveness.</li>
                    </ul>
                    <b><li>Mergers and Acquisitions</li></b>
                    <ul>
                        <li>We conduct comprehensive due diligence on potential acquisitions and partnerships.</li>
                        <li>We provide valuation services and financial analysis to support decision-making.</li>
                        <li>We assist with negotiation, deal structuring, and post-merger integration to maximize value and minimize risk.</li>
                    </ul>
                    <b><li>Financial Restructuring</li></b>
                    <ul>
                        <li>We evaluate financial performance and viability to identify restructuring opportunities.</li>
                        <li>We develop and implement strategic restructuring plans to optimize capital structure and improve financial stability.</li>
                        <li>We negotiate with creditors and stakeholders to achieve mutually beneficial outcomes and facilitate business turnaround.</li>
                    </ul>

                </ol>
            </div>
            <KnowMoreLinker linkText={"explore more services"} navRoute={"/services"}/>
            <Footer/>
        </>
        
    )
}