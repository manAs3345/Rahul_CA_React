import React from "react";
import './index.css';
import { Footer } from "../../../../components/footer";
import { Topnavbar } from "../../../../components/navbar";
import serviceBannerImage from "../../../../images/service_details.jpg";
import { BannerSubText } from "../../../../components/bannerSubText";
import { KnowMoreLinker } from "../../../../components/more";

export function ServiceDetailsAUSOutsourcing() {
    return(
        <>
            <Topnavbar/>
            <BannerSubText bannerBackgroundImage={serviceBannerImage} bannerTitle={"Outsourcing"} bannerSubText={"Streamline financial processes with professional accounting services."}/>
            <div className="outsourcingDetailsContainer">
              <section class="outsourcingDetails1 outsourcingSection">
                <h1>What do we provide?</h1>
                <br/>
                <h1>Outsourcing Services - Accounting and Taxation</h1>
                <p>With the introduction of VAT and Corporate Tax in the Australia, many businesses—especially SMEs—are seeking reliable partners for efficient compliance. Outsourcing accounting and tax functions to R V Somani & Co. ensures: </p>
                <ul>
                  <li>Daily Accounting, with minimum errors and timely completion</li>
                  <li>Detailed MIS analysis with actionable insights for better decision-making</li>
                  <li>Assistance in VAT and Corporate Tax Compliance, drawing from our rich experience in managing more complex tax regimes like India's Service Tax, VAT, GST, and Income Tax</li>
                </ul>
                <p>Our experience handling more intricate Indian tax structures gives us a superior advantage in efficiently implementing UAE VAT and Corporate Tax regulations. We are proficient in Tally ERP, one of the most widely used accounting software solutions in the UAE, and can customize it to client-specific needs.</p>
              </section>
              <section class="outsourcingDetails2 outsourcingSection">
                  <h1>Outsourcing Services - Business Process Management</h1>
                  <p>We specialize in outsourcing key financial processes, including Accounts Payable, for clients across the <b>Middle East, US, EU, and Australia.</b></p>
                  <br></br>
                  <h3>Our Methodology:</h3>
                  <ul>
                    <li>Process Mapping - Study and analyze existing workflows.</li>
                    <li>Documentation & Internal Control Review - Strengthen compliance and efficiency</li>
                    <li>Transition Plan - Seamless shift of operations from client to R V Somani & Co</li>
                  </ul>
              </section>
              <section className="keyBenefitsSection outsourcingSection">
                 <h1>Key Benefits of Outsourcing to R V Somani & Co.</h1>
                <div className="keyBenefits">
                  <div className = "benefitItem">
                    <h3>Reduction in Hiring Burdens</h3>
                    <p>Hiring in the UAE entails visa formalities, relocation, accommodation, and regulatory compliances. By outsourcing, clients avoid these costs and complexities.</p>
                  </div>
                  <div className = "benefitItem">
                    <h3>Business Continuity and Scalability</h3>
                    <p>Our trained teams ensure seamless continuity. If any staff member is unavailable, replacement is immediate, owing to Standard Operating Procedures (SOPs) and cross-trained teams. We also have the capability to quickly ramp up resources based on client needs.</p>
                  </div>
                  <div className = "benefitItem">
                    <h3>Tech-Driven Processes</h3>
                    <div>
                      <ul>
                        <li>Work Management Systems to track and complete assignments on schedule.</li>
                        <li>Cloud-Based Solutions (OneDrive and AWS) for real-time access to data and MIS reports.</li>
                        <li>Secure VPN Connectivity enabling remote completion of tasks while ensuring data protection.</li>
                      </ul>
                    </div>
                  </div>
                  <div className = "benefitItem">
                    <h3>Expertise in Automation and Process Optimization</h3>
                    <ul>
                      <li>Our dedicated IT team assists clients in process automation and implementation of ERP systems.</li>
                      <li>Focus on reducing manual interventions, thus minimizing errors and improving turnaround times.</li>
                    </ul>
                  </div>
                  <div className = "benefitItem">
                    <h3>Compliance Assurance</h3>
                    <p>We ensure timely filing of all statutory returns, helping clients avoid penalties and late fees.</p>
                    <ul>
                      <li>Client-Centric Approach: We work as an extension of your team, adapting our processes to fit your business needs.</li>
                      <li>Confidentiality and Data Security: Our systems are designed to ensure strict confidentiality and data protection at every step.</li>
                      <li>Continuous Improvement: We regularly upgrade our technical skills, automate repetitive tasks, and introduce newer technologies to deliver smarter and faster services.</li>
                      <li>Cost Efficiency: Significant savings on operational costs compared to maintaining an in-house team in the UAE.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="OutsourcingDetails4 outsourcingSection">
                <h1>Our vision for you</h1>
                <p>We aim to be your trusted partner in navigating the UAE's evolving business environment, offering:</p>
                <ul>
                  <li>Reliable Financial Management</li>
                  <li>Seamless Compliance</li>
                  <li>Scalable Outsourcing Solutions</li>
                </ul>
              </section>
            </div>
            <KnowMoreLinker navRoute="/services" linkText="explore more services"/>
            <Footer/>
        </>
    );
}