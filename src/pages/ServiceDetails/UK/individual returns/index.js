import React from 'react';
import './index.css';
import { BannerSubText } from '../../../../components/bannerSubText';
import serviceBannerImage from '../../../../images/service_details.jpg';
import { Topnavbar } from '../../../../components/navbar';
import { Footer } from '../../../../components/footer';

export function IndividualReturnsUK(){
    return(
        <>
        <Topnavbar/>
        <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Individual Returns"} bannerSubText={"We help individuals file their income tax returns accurately and on time."}/>
        <div className="individual-returns-uk">
            <h1>What do we provide?</h1>
            <div><b>Expert Tax Return Filing by Indian Chartered Accountants</b></div>
            <div className = "ir-pt">
                <p><b>At R V Somani & Co. , we have expanded our horizon to serve clients beyond India. <br/> We now offer UK Individual Tax Return Filing Services, designed to cater to the needs of:</b></p>
                <br/>
                <ul>
                    <li>Non-Resident Indians (NRIs) with income in the UK</li>
                    <li>Indian residents with UK tax obligations</li>
                    <li>UK residents seeking affordable and professional tax return filing support from India</li>
                </ul>
            </div>
            <div className = "ir-pt">
                <p><b>Our UK Tax Services Include:</b></p>
                <ul>
                    <li>Preparation and Filing of Self Assessment Tax Returns (SA100)</li>
                    <li>Calculation of Tax Liability / Refund</li>
                    <li>Reporting of Foreign Income, Dividends, Property Rentals</li>
                    <li>Claiming Applicable Allowances & Deductions (e.g., Personal Allowance, Blind Person's Allowance)</li>
                    <li>Support with HMRC Login Creation & Submission</li>
                    <li>Guidance on Double Taxation Relief (DTAA - India-UK)</li>
                    <li>Correspondence with HMRC on basic tax matters, if required</li>
                </ul>
            </div>
            <div className = "ir-pt">
                <p><b>Who should file a tax return?</b></p>
                <div>You may need to file a Self Assessment tax return in the UK if you:</div>
                <ul>
                    <li>Are self-employed or a freelancer</li>
                    <li>Receive rental income from UK properties</li>
                    <li>Have untaxed income (e.g., dividends, interest)</li>
                    <li>Earn more than £100,000 annually</li>
                    <li>Have foreign income (and are a UK tax resident)</li>
                    <li>Need to claim tax reliefs or report capital gains</li>
                </ul>
            </div>
            <div className = "ir-pt">
                <p><b>Why choose us?</b></p>
                <ul>
                    <li>Indian pricing with UK compliance</li>
                    <li>Knowledge of both UK and Indian taxation systems</li>
                    <li>Assistance with foreign income and DTAA planning</li>
                    <li>End-to-end online process</li>
                    <li>Personalized support from qualified Chartered Accountants</li>
                </ul>
            </div>
        </div>
        <Footer/>
        </>
    );
}