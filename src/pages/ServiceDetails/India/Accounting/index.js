import React from "react";
import { Topnavbar } from "../../../../components/navbar";
import { Footer } from "../../../../components/footer";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import './index.css';
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsAccounting(){
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Accounting"} bannerSubText={"Streamline financial processes with professional accounting services."}/>
            <div className="taxationServiceContainer">
                <h1>What do we help out with?</h1>
                <ol>
                    <b><li>Bookkeeping</li></b>
                    <ul>
                        <li>We maintain accurate and up-to-date financial records for effective decision-making and compliance.</li>
                        <li>We ensure adherence to accounting standards, regulations, and reporting requirements.</li>
                        <li>We provide timely financial reports and insights to support business operations and strategic planning.</li>
                    </ul>
                    <b><li>Financial Reporting</li></b>
                    <ul>
                        <li>We prepare and analyze comprehensive financial statements in compliance with regulatory standards and reporting requirements.</li>
                        <li>We provide insights into financial performance, trends, and variances.</li>
                        <li>We assist with interpretation of financial data to support informed decision-making and strategy development.</li>
                    </ul>
                    <b><li>Payroll Processing</li></b>
                    <ul>
                        <li>We manage payroll processes accurately and efficiently, including calculations, deductions, and filings.</li>
                        <li>We ensure compliance with tax laws, labor regulations, and employee benefits.</li>
                        <li>We provide expert guidance and support on payroll-related matters to minimize risks and ensure employee satisfaction.</li>
                    </ul>
                    <b><li>Budgeting and Forecasting</li></b>
                    <ul>
                        <li>We develop comprehensive budgets aligned with organizational goals and objectives.</li>
                        <li>We forecast future financial performance and cash flow to support planning and decision-making.</li>
                        <li>We monitor budget performance and variances, and provide actionable insights for performance improvement.</li>
                    </ul>
                    <b><li>Financial Statement Analysis</li></b>
                    <ul>
                        <li>We analyze financial statements to evaluate performance, profitability, and financial health.</li>
                        <li>We identify trends, patterns, and anomalies to support strategic decision-making and risk management.</li>
                        <li>We provide insights and recommendations for optimizing financial performance and achieving business objectives.</li>
                    </ul>
                </ol>
            </div>
            <KnowMoreLinker linkText={"explore more services"} navRoute={"/services"}/>
            <Footer/>
        </>
        
    )
}