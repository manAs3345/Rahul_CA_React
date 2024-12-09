import { Banner } from "../../components/banner";
import { Topnavbar } from "../../components/navbar";
import { Service } from "../../components/service";
import {Footer} from '../../components/footer';
import ServicesBanner from '../../images/services_bg.jpg';

import TaxIcon from '../../images/audit.png';
import AuditIcon from '../../images/customer-service.png';
import BusinessIcon from '../../images/ba.png';
import AccountingIcon from '../../images/accounting.png';
import gstIcon from '../../images/taxes.png';

import indiaFlagIcon from '../../images/india.png';
import uaeFlagIcon from '../../images/uae.png';

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

//Service Descriptions
const sd1 = "Stay compliant and minimize your tax liabilities with our expert tax planning and filing services.";
const sd2 = "Gain confidence in your financial statements with our comprehensive audit and assurance services.";
const sd3 = "Let us help you make informed decisions and drive growth with our strategic business advisory services.";
const sd4 = "Streamline your financial processes and focus on your core business activities while we handle your accounting needs.";
const sd5 = "Expert financial advice, auditing, tax planning, and strategic guidance to businesses and individuals for optimal financial management and compliance.";


const sdd1 = "Stay compliant and minimize your tax liabilities with our expert tax planning and filing services.";
const sdd2 = "Unlock growth opportunities with strategic business advisory services.";
const sdd3 = "Ensure accuracy and compliance with our comprehensive audit and assurance services.";
const sdd4 = "Affordable accounting and taxation services starting from AED 300 per month.";


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
        <Topnavbar/>
        <Banner bannerBackgroundImage={ServicesBanner} bannerTitle={"Our Services"}/>
        <form id="country-form">
            <label>Pick your country:</label>
            <select onChange={(event)=>{setCurrentCountry(event.target.value); console.log(currentCountry);}} id="sel">
                {currentCountry == 'india'?<option value="india" selected>India</option>:<option value="india">India</option>}
                {currentCountry == 'dubai'?<option value="dubai" selected>Middle East</option>:<option value="dubai">Middle East</option>}
            </select>
        </form>

        {/* <div id={currentCountry == 'dubai'?"information":"hidden"}>
            <p id="information-text">As we are providing outsourcing services from India, we are able to provide accounting and taxation services at lower rates, even up to 300 Dirham per month</p>
        </div> */}
        {
            currentCountry == 'india'?
            <div id="services-section">
                <Service serviceImage={TaxIcon} serviceName={s1} serviceDescription={sd1}/>
                <Service serviceImage={AuditIcon} serviceName={s2} serviceDescription={sd2}/>
                <Service serviceImage={BusinessIcon} serviceName={s3} serviceDescription={sd3}/>
                <Service serviceImage={AccountingIcon} serviceName={s4} serviceDescription={sd4}/>
                <Service serviceImage={gstIcon} serviceName={s5} serviceDescription={sd5}/>
            </div> 
            :
            <div id="services-section">
                <Service serviceImage={TaxIcon} serviceName={s4_d} serviceDescription={sdd4}/>
                <Service serviceImage={TaxIcon} serviceName={s1_d} serviceDescription={sdd1}/>
                <Service serviceImage={AuditIcon} serviceName={s2_d} serviceDescription={sdd2}/>
                <Service serviceImage={BusinessIcon} serviceName={s3_d} serviceDescription={sdd3}/>
            </div> 
        }
        
        <Footer/>
        </>
    );
}