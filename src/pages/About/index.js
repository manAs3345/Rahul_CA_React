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
    const aboutBannerSubText = "At R V Somani & Co., Chartered Accountants, we bring over two decades of expertise in providing a comprehensive suite of services in Accounting, Taxation, Auditing, Finance, and Business Process Outsourcing, serving clients across India, UAE, UK, and the USA. Our firm has continually evolved to meet the growing needs of businesses by combining domain expertise with cutting-edge technology, ensuring error-free, timely, and scalable solutions to our clients.";

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