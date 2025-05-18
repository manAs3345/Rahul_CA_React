import React from "react";
import { Topnavbar } from "../../../../components/navbar";
import { Footer } from "../../../../components/footer";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import './index.css';
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsTaxation(){
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Taxation"} bannerSubText={"Stay compliant and minimize your tax liabilities with our expert tax planning and filing services."}/>
            <div className="taxationServiceContainer">
                <h1>What do we help out with?</h1>
                <ol>
                    <b><li>Tax Planning and advisory</li></b>
                    <ul>
                        <li>Personalized tax planning and advisory services to help individuals and businesses legally minimize their tax liabilities.</li>
                        <li>Assess clients financial situations, including income, investments, and expenses, to devise tax-efficient strategies.</li>
                        <li>Provide guidance on various tax-saving investment options available under Indian tax laws, such as tax-saving fixed deposits, Public Provident Fund (PPF), Equity-Linked Savings Schemes (ELSS), National Pension System (NPS), and more.</li>
                        <li>Give advice on structuring your business transactions, mergers, acquisitions, and other financial decisions to optimize your tax outcomes.</li>
                    </ul>
                    <b><li>Income Tax Return (ITR) Filing</li></b>
                    <ul>
                        <li>Ensure that your businesses complies with the complex direct tax regime.</li>
                        <li>Ensure that all eligible deductions, exemptions, and credits are claimed to reduce the overall tax liability.</li>
                        <li>Well-versed in the e-filing procedures mandated by the Income Tax Department and help you to navigate the online filing process.</li>
                    </ul>
                    <b><li>Goods and Services Tax (GST) Services</li></b>
                    <ul>
                        <li>We assist in GST registration, filing of GST returns, and maintaining GST compliance.</li>
                        <li>We provide guidance on the correct classification of goods and services, calculation of GST liabilities, and the implementation of GST-compliant accounting systems.</li>
                    </ul>

                </ol>
                
            </div>
            <KnowMoreLinker linkText={"explore more services"} navRoute={"/services"}/>
            <Footer/>
        </>
        
    )
}