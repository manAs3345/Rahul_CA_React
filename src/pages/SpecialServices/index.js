import React from 'react';
import './index.css';
import { Topnavbar } from '../../components/navbar';
import {Footer} from '../../components/footer';
import serviceBannerImage from "../../images/service_details.jpg";
import { BannerSubText } from '../../components/bannerSubText';
import settingsIcon from '../../images/setting.png';
import warningIcon from '../../images/warning.png';
import tickIcon from '../../images/checked.png';
import targetIcon from "../../images/target.png";

export function SpecialServices(){
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Global Accounting and VAT/GST Filing at Just ₹1,999 per Month"} bannerSubText={"Reduce your accounting costs by up to 70% with a structured, process-driven offshore team from India."}/>
            <div className='part1'>
                <div className='problem-section part1-section'>
                    <div className="heading-container">
                        <img src={warningIcon} alt="problem-icon" className="heading-icon"/>
                        <h1>The problem</h1>
                    </div>
                    
                    <p>Most businesses across UAE, Singapore, GCC countries, UK and Australia are overpaying for accounting.</p>
                    <ul>
                        <li>High monthly fees</li>
                        <li>Delays in compliance</li>
                        <li>Unstructured document handeling</li>
                        <li>Lack of process</li>
                    </ul>
                    <p>We solve this with a system-driven accounting model. Applicable for UAE VAT, Singapore GST, UK VAT, Australia GST and similar compliance systems.</p>
                </div>
                <div className='what-we-do-section part1-section'>
                    <div className="heading-container">
                        <img src={tickIcon} alt="problem-icon" className="heading-icon"/>
                        <h1>What we do</h1>
                    </div>
                    <ul class="wwd-list">
                        <li>Monthly accounting (sales, purchase, expenses)</li>
                        <li>Bank reconciliation</li>
                        <li>VAT return preparation and filing</li>
                        <li>Structured document handeling system</li>
                    </ul>

                </div>
                <div className="how-it-works-section part1-section">
                    <div className="heading-container">
                        <img src={settingsIcon} alt="problem-icon" className="heading-icon"/>
                        <h1>How it works:</h1>
                    </div>
                    <ol>
                        <li>Upload documents in secure folder</li>
                        <li>Submit quick document form</li>
                        <li>We process accounting</li>
                        <li>VAT / GST return filed on time</li>
                    </ol>
                    <br/>
                </div>
            </div>
            <p class="simple-statement"><b>Simple. Structured. Reliable.</b></p>
            <div className="plans-section">
                <div className='plan1 plan'>
                    <h1 className="blue">Starter Plan</h1>
                    <h1 className="blue">&#8377;1999/month</h1>
                    <ul>
                        <li>Monthly accounting for VAT compliance</li>
                        <li>VAT return filing </li>
                        <li>Suitable for low transaction volume</li>
                        <li>Structured document system</li>
                    </ul>
                    <br/>
                    <p>* best suited for small businesses with limited transaction and timely document submission</p>
                </div>
                <div className='plan2 plan'>
                    <h1 className="blue">Growth Plan</h1>
                    <h1 className="blue">&#8377;4999/month</h1>
                    <ul>
                        <li>Complete accounting and VAT compliance</li>
                        <li>Bank accounting and reconciliation </li>
                        <li>Suitable for moderate transaction volume</li>
                        <li>Periodic review of records</li>
                    </ul>
                    <br/>
                    <p>* Designed for businesses requiring detailed support and handling of larger or complex operations.</p>
                </div>
                <div className="plan3 plan">
                    <h1 className="blue">Custom Plan</h1>
                    <h1 className="blue">&#8377;9999/month</h1>
                    <ul>
                        <li>Complete accounting and VAT compliance</li>
                        <li>Balance sheet preparation and finalisation</li>
                        <li>Corporate tax support</li>
                        <li>Suitable for higher volume / complex cases</li>
                    </ul>
                    <br/>
                    <p>* Designed for businesses requiring detailed support and handling of larger or complex operations.</p>
                </div>
            </div>
            <div className='important-section'>
                <b>Important</b>
                <div className='important-section-pts'>
                    <div className="pts"><span>&#8226;</span>All plans include accounting based on data provided by the client</div>
                    <div className="pts"><span>&#8226;</span>Scope depends on transaction volume and quality of documents submitted</div>
                    <div className="pts"><span>&#8226;</span>Additional work, will be charged separately</div>
                    <div className="pts"><span>&#8226;</span>Fees are payable in advance on a monthly basis</div>
                    <div className="pts"><span>&#8226;</span>Corporate tax filing and advisory services may be charged separately</div>
                </div>
            </div>
            <div className='final-section'>
                <div className="choose-us-div final-section-div">
                    <h1>Why Choose Us?</h1>
                    <ul>
                        <li>Chartered Accountants (India)</li>
                        <li>20+ years experience</li>
                        <li>Process-driven system</li>
                        <li>Cost-efficient model</li>
                        <li>Scalable team</li>
                    </ul>
                </div>
                <div className="different-div final-section-div">
                    <h1>Why we are different?</h1>
                    <p>We are not just another accounting firm.</p>
                    <p>We provide:</p>
                    <div className="target-section">
                        <img src={targetIcon}></img>
                        <div>
                            <p><b>System + Process + Execution</b></p>
                            <p>That is why we can deliver at lower cost.</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <Footer/>
        </>
    );
}