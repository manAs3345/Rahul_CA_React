import './index.css';
import {Banner} from'../../components/banner';
import aboutBannerBackgroundImage from '../../images/about_us_banner.jpg';
import { Topnavbar } from '../../components/navbar';
import { Section1 } from '../../components/section1';
import { Footer } from '../../components/footer';
import { BannerImageText } from '../../components/bannerImageText';
import samplePerson from '../../images/founder.jpg';
import graduate from '../../images/graduation.png';
import { useEffect } from 'react';

export function About(){
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const aboutBannerHeading = "Our Story";
    const aboutBannerSubText = "R V Somani & Co. is our firm, a leading Chartered Accountancy practice renowned for its commitment to excellence within a highly professional atmosphere. We are dedicated to upholding the highest standards of technical proficiency in Finance, Accounting, and Taxation. At our firm, we place a strong emphasis on leveraging technology, ensuring timely project completion, and conducting thorough audits to uphold accuracy and quality. Our focus extends to performance metrics crucial for business success and maintaining exceptional quality standards. Through methodologies like Value Stream Mapping and Ideation drives, we actively identify areas for improvement, fostering continuous enhancement across our operations";

    return(
        <>
        <Topnavbar/>
        <BannerImageText 
        Image={aboutBannerBackgroundImage} 
        bannerHeading="Our Story"
        bannerSubText = {aboutBannerSubText}
        bannerButtonText={null}
        />
        <div id="members-container">
            <div id="member-text">
                <h3>Mr. Rahul Vishnudas Somani</h3>
                <div>Practicing Chartered Accountant with 14 years of experience</div>
                <p>As a practicing Chartered Accountant with 14 years of experience, he has honed his skills in providing a wide range of services in Auditing, Finance, Accounting, Direct and Indirect taxes in India and Dubai. At R V Somani & Co, Rahul has had the opportunity to work with a diverse range of clients, from small businesses to large corporations, across various industries. Rahul is committed to delivering exceptional service to my clients and helping them achieve their financial goals.</p>
                <div id="qualification-container"><span id="qualification"><img src={graduate}></img>Chartered Accountant from The Institute of Chartered Accountants of India</span> <span id="qualification"><img src={graduate}></img>Bachelor of Commerce from University of Pune</span></div>
            </div>
            {/* <img src={samplePerson}/> */}
            
        </div>
        <Footer/>
        </>
    );
}