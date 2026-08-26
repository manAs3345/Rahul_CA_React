import { Banner } from "../../components/banner";
import { Topnavbar } from "../../components/navbar";
import { Service } from "../../components/service";
import {Footer} from '../../components/footer';
import ServicesBanner from '../../images/services_bg.jpg';
import { Helmet } from "react-helmet";

import TaxIcon from '../../images/audit.png';
import AuditIcon from '../../images/customer-service.png';
import BusinessIcon from '../../images/ba.png';
import AccountingIcon from '../../images/accounting.png';
import gstIcon from '../../images/taxes.png';

import indiaFlagIcon from '../../images/india.png';
import uaeFlagIcon from '../../images/uae.png';
import ukFlagIcon from '../../images/uk.png';
import usFlagIcon from '../../images/us.png';
import ausFlagIcon from '../../images/aus.png';

import'./index.css';
import { useContext, useEffect, useState } from "react";
import { CountryContext, PagesContext } from "../../App";



//Service Names
const s1 = "Taxation";
const s2 = "Audit and Assurance";
const s3 = "Business Advisory";
const s4 = "Accounting";
const s5 = "GST and Compliance";

const s1_d = "Taxation";
const s2_d = "Corporate";
const s3_d = "Advisory and Assurance";
const s4_d = "Outsourcing"

const s1_uk = "Outsourcing";
const s2_uk = "Individual returns";

const s1_us = "Outsourcing";
const s2_us = "Individual returns";

const s1_aus = "Outsourcing";
const s2_aus = "Individual returns";
//Service Descriptions
const sd1 = "Stay compliant and minimize your tax liabilities with our expert tax planning and filing services.";
const sd2 = "Gain confidence in your financial statements with our comprehensive audit and assurance services.";
const sd3 = "Let us help you make informed decisions and drive growth with our strategic business advisory services.";
const sd4 = "Streamline your financial processes and focus on your core business activities while we handle your accounting needs.";
const sd5 = "Expert financial advice, auditing, tax planning, and strategic guidance to businesses and individuals for optimal financial management and compliance.";


const sdd1 = "Stay compliant and minimize your tax liabilities with our expert tax planning and filing services.";
const sdd2 = "Unlock growth opportunities with strategic business advisory services.";
const sdd3 = "Ensure accuracy and compliance with our comprehensive audit and assurance services.";
const sdd4 = "Comprehensive outsourced solutions for accounting, taxation, and business process management tailored to your business needs.";

const sduk1 = "Comprehensive outsourced solutions for accounting, taxation, and business process management tailored to your business needs.";
const sduk2 = "Reliable and comprehensive services designed to simplify and manage all aspects of your individual income tax returns with ease and accuracy";

const sdus1 = "Comprehensive outsourced solutions for accounting, taxation, and business process management tailored to your business needs.";
const sdus2 = "Reliable and comprehensive services designed to simplify and manage all aspects of your individual income tax returns with ease and accuracy";

const sdaus1 = "Comprehensive outsourced solutions for accounting, taxation, and business process management tailored to your business needs.";
const sdaus2 = "Reliable and comprehensive services designed to simplify and manage all aspects of your individual income tax returns with ease and accuracy";

//SEO DATA
const seoData = {
    india: {
        title: "CA Services in India | Tax, Audit, GST & Accounting",
        desc: "Professional Chartered Accountant services in India including taxation, GST, audit, accounting and business advisory."
    },
    dubai: {
        title: "Accounting & Tax Services in UAE | Outsourcing Experts",
        desc: "Affordable accounting, taxation and outsourcing services for UAE businesses provided by experienced Chartered Accountants."
    },
    uk: {
        title: "Accounting Services in UK | Outsourcing & Tax Returns",
        desc: "Reliable UK accounting services including outsourcing and individual tax return filing."
    },
    us: {
        title: "US Accounting Services | Outsourcing & Tax Filing",
        desc: "Professional accounting outsourcing and individual tax return services for US clients."
    },
    aus: {
        title: "Accounting Services in Australia | Tax & Outsourcing",
        desc: "Expert accounting and tax services for Australian businesses and individuals."
    }
};

export function Services(){
    const {currentCountry, setCurrentCountry} = useContext(CountryContext);
    const {currentPage, setCurrentPage} = useContext(PagesContext);
    // useEffect(()=>{
    //     // const option = document.getElementById("sel");
    //     // option.value = currentCountry;
    //     console.log(currentCountry);
    //     if(currentCountry=='dubai'){document.getElementById('information').classList.add('infoAnimate')}
    // },[currentCountry])
    return(
        <>
        <Helmet>
            {/* Primary SEO */}
            <title>{seoData[currentCountry].title} | R V Somani & Co | Global CA Firm</title>
            <meta name="description" content={seoData[currentCountry].desc + " Trusted Chartered Accountants offering affordable global outsourcing, taxation, audit, GST, and advisory services."} />

            <meta 
                name="keywords" 
                content="
                chartered accountant services,
                CA firm India,
                global accounting firm,
                affordable accounting services,
                taxation services India,
                GST compliance services,
                audit and assurance services,
                business advisory services,
                accounting outsourcing India,
                UAE accounting services,
                UK tax return services,
                US accounting outsourcing,
                Australia accounting services,
                international CA firm,
                outsourced bookkeeping services
                "
            />

            {/* Indexing */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://casomani.com/services" />

            {/* Open Graph (for WhatsApp, LinkedIn, Facebook) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${seoData[currentCountry].title} | Global CA Services`} />
            <meta property="og:description" content={seoData[currentCountry].desc} />
            <meta property="og:image" content="https://casomani.com/og-services.jpg" />
            <meta property="og:url" content="https://casomani.com/services" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${seoData[currentCountry].title}`} />
            <meta name="twitter:description" content={seoData[currentCountry].desc} />
            <meta name="twitter:image" content="https://casomani.com/og-services.jpg" />

            {/* Extra SEO hint */}
            <meta name="author" content="R V Somani & Co" />
            <meta name="language" content="en" />
        </Helmet>

        <Topnavbar/>
        <Banner bannerBackgroundImage={ServicesBanner} bannerTitle={"Our Services"}/>
        <div className="countryTabs">
            <div className={currentCountry=="india"?"tab activeTab":"tab"} onClick={()=>{setCurrentCountry('india'); console.log(currentCountry);}}>
                <img src ={indiaFlagIcon} className="countryFlags"/> 
                <p>India</p>
            </div>
            <div className={currentCountry=="dubai"?"tab activeTab":"tab"} onClick={()=>{setCurrentCountry('dubai'); console.log(currentCountry);}}>
                <img src ={uaeFlagIcon} className="countryFlags"/> 
                <p>UAE</p>
            </div>
            <div className={currentCountry=="uk"?"tab activeTab":"tab"} onClick={()=>{setCurrentCountry('uk'); console.log(currentCountry);}}>
                <img src ={ukFlagIcon} className="countryFlags"/> 
                <p>UK</p>
            </div>
            <div className={currentCountry=="us"?"tab activeTab":"tab"} onClick={()=>{setCurrentCountry('us'); console.log(currentCountry);}}>
                <img src ={usFlagIcon} className="countryFlags"/> 
                <p>USA</p>
            </div>
            <div className={currentCountry=="aus"?"tab activeTab":"tab"} onClick={()=>{setCurrentCountry('aus'); console.log(currentCountry);}}>
                <img src ={ausFlagIcon} className="countryFlags"/> 
                <p>Australia</p>
            </div>
        </div>
        
        {/* <form id="country-form">
            <label>Pick your country:</label>
            <select onChange={(event)=>{setCurrentCountry(event.target.value); console.log(currentCountry);}} id="sel">
                {currentCountry == 'india'?<option value="india" selected>India</option>:<option value="india">India</option>}
                {currentCountry == 'dubai'?<option value="dubai" selected>UAE</option>:<option value="dubai">UAE</option>}
            </select>
        </form> */}

        {/* <div id={currentCountry == 'dubai'?"information":"hidden"}>
            <p id="information-text">As we are providing outsourcing services from India, we are able to provide accounting and taxation services at lower rates, even up to 300 Dirham per month</p>
        </div> */}
        {
            currentCountry == 'india'?
            <div id="services-section">
                <Service serviceImage={TaxIcon} serviceName={s1} serviceDescription={sd1} country="india" serviceRouteName="taxation"/>
                <Service serviceImage={AuditIcon} serviceName={s2} serviceDescription={sd2} country="india" serviceRouteName="audit"/>
                <Service serviceImage={BusinessIcon} serviceName={s3} serviceDescription={sd3} country="india" serviceRouteName="ba"/>
                <Service serviceImage={AccountingIcon} serviceName={s4} serviceDescription={sd4} country="india" serviceRouteName="accounting"/>
                <Service serviceImage={gstIcon} serviceName={s5} serviceDescription={sd5} country="india" serviceRouteName="gst"/>
            </div> 
            : currentCountry == 'dubai'?
            <div id="services-section">
                <Service serviceImage={TaxIcon} serviceName={s4_d} serviceDescription={sdd4} country="uae" serviceRouteName="outsourcing"/>
                <Service serviceImage={TaxIcon} serviceName={s1_d} serviceDescription={sdd1} country="uae" serviceRouteName="taxation"/>
                <Service serviceImage={AuditIcon} serviceName={s2_d} serviceDescription={sdd2} country="uae" serviceRouteName="corporate"/>
                <Service serviceImage={BusinessIcon} serviceName={s3_d} serviceDescription={sdd3} country="uae" serviceRouteName="aa"/>
            </div> :
            currentCountry == 'uk'?
            <div id="services-section">
                <Service serviceImage={TaxIcon} serviceName={s1_uk} serviceDescription={sduk1} country="uk" serviceRouteName="outsourcing"/>
                <Service serviceImage={AuditIcon} serviceName={s2_uk} serviceDescription={sduk2} country="uk" serviceRouteName="individualReturns"/>
            </div>
            :currentCountry == 'us'?
            <div id="services-section">
                <Service serviceImage={TaxIcon} serviceName={s1_us} serviceDescription={sdus1} country="us" serviceRouteName="outsourcing"/>
                <Service serviceImage={AuditIcon} serviceName={s2_us} serviceDescription={sdus2} country="us" serviceRouteName="individualReturns"/>
            </div>:
            <div id="services-section">
                <Service serviceImage={TaxIcon} serviceName={s1_aus} serviceDescription={sdaus1} country="aus" serviceRouteName="outsourcing"/>
                <Service serviceImage={AuditIcon} serviceName={s2_aus} serviceDescription={sdaus2} country="aus" serviceRouteName="individualReturns"/>
        
            </div>}
        
        <Footer/>
        </>
    );
}