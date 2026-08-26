import { Topnavbar } from "../../components/navbar";
import { HomePageBanner } from "../../components/homepageBanner";
import { AdvantageSection } from "../../components/advantageSection";
import { PagesContext } from '../../App';
import { useContext } from "react";
import { Link } from "react-router-dom";
import './index.css';
import RatingIcon from '../../images/rating.png';
import IdeaIcon from '../../images/idea.png';
import CustomerServiceIcon from '../../images/customer-service.png';
import CustomerSatisfactionIcon from '../../images/customer-satisfaction.png';
import { PopularService } from "../../components/popularService";
// import TaxationIcon from '../../images/taxes.png';
// import HomePageBannerImage from '../../images/homepage_cta.png';
import OfficePeopleImage from '../../images/office_people.jpg';
import popularServiceAudit from '../../images/popularService_audit.jpg';
import popularServiceBA from '../../images/popularService_BusinessAdvisory.jpg';
import popularServiceAccounting from '../../images/popularService_Accounting.jpg';
import contactBannerImg from '../../images/contact_section.jpg';
import { Helmet } from "react-helmet";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

import { Footer } from "../../components/footer";
import { BannerImageText } from "../../components/bannerImageText";

export function Home(){
    //Advantage Section Titles
    const advTitle1 = "Expertise";
    const advTitle2 = "Tailored Solutions";
    const advTitle3 = "Comprehensive Services";
    const advTitle4 = "Client-Centric Approach";

    //Advantage Section Description
    const advDesc1 = "Our team of highly qualified and experienced Chartered Accountants is well-versed in Indian financial regulations, tax laws, and business practices. We stay up-to-date with the latest changes to provide you with the best possible guidance.";
    const advDesc2 = "We believe in customized solutions. Whether you're a startup, a growing business, or an individual seeking financial advice, we'll tailor our services to meet your specific needs.";
    const advDesc3 = "Benefit from our comprehensive suite of services, including tax planning, auditing, financial advisory, and business consulting. Our experienced professionals offer end-to-end solutions, streamlining your processes and serving as a trusted partner for all your accounting needs.";
    const advDesc4 = "Your success is our priority. We take the time to understand your goals and concerns, providing personalized advice and support every step of the way."
    
    //popular service names
    const ps1 = "Taxation";
    const ps2 = "Audit and Assurance";
    const ps3 = "Business Advisory";
    const ps4 = "Accounting";

    const psd1 = "Stay compliant and minimize your tax liabilities with our expert tax planning and filing services.";
    const psd2 = "Gain confidence in your financial statements with our comprehensive audit and assurance services.";
    const psd3 = "Let us help you make informed decisions and drive growth with our strategic business advisory services.";
    const psd4 = "Streamline your financial processes and focus on your core business activities while we handle your accounting needs.";
    
    const bannerSettings = "Have a question or need help? Reach out to us. Our friendly team is ready to assist you with any inquiries or provide more details about our services. Don't hesitate to get in touch. We're here to support you.";
    
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 10000,
    //     autoplaySpeed: 10000,
    //     cssEase: "linear",
    //     pauseOnHover: true,
    //     responsive:[
    //         {
    //             breakpoint:500,
    //             settings:{
    //                 slidesToShow:1,
    //                 slidesToScroll:1,
    //                 infinite:true,

    //             }
    //         }
    //     ]
    //   };

    // const responsive = {
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 1,
    //       slidesToSlide: 1 // optional, default to 1.
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 1,
    //       slidesToSlide: 1 // optional, default to 1.
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1,
    //       slidesToSlide: 1 // optional, default to 1.
    //     }
    //   };
      let {currentPage,setCurrentPage} = useContext(PagesContext);
    
    return(
        <>
            <Helmet>
                {/* Primary SEO */}
                <title>R V Somani & Co. - Trusted Chartered Accountants</title>

                <meta
                    name="description"
                    content="R V Somani & Co. is an affordable global CA firm providing outsourced accounting, bookkeeping, tax filing, audit, GST/VAT compliance and business advisory services for startups and businesses worldwide including India, UAE, UK and USA."
                />

                <meta
                    name="keywords"
                    content="global CA firm, affordable CA services, outsourced accounting services, bookkeeping services, offshore accounting, GST filing, VAT filing, audit services, tax consultants, accounting firm India, UAE accounting services, UK bookkeeping services, USA accounting support, business advisory services"
                />

                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />

                <meta
                    name="author"
                    content="R V Somani & Co."
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link
                    rel="canonical"
                    href="https://casomani.com/"
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:title"
                    content="Affordable Global CA Services for Businesses Worldwide"
                />

                <meta
                    property="og:description"
                    content="Trusted outsourced accounting, bookkeeping, audit, tax and GST/VAT filing services for businesses in India, UAE, UK, USA and globally."
                />

                <meta
                    property="og:url"
                    content="https://casomani.com/"
                />

                <meta
                    property="og:image"
                    content="https://casomani.com/images/global-ca-services-banner.jpg"
                />

                <meta
                    property="og:site_name"
                    content="R V Somani & Co."
                />

            </Helmet>
            <Topnavbar/>
            {/* <Slider {...settings}>
                <HomePageBanner homeBannerTitle="Welcome to R V Somani & Co. , your trusted partner in financial excellence" button1Text = "Find out more" button2Text = "Our Services" bannerImage = {HomePageBannerImage}/>
                <HomePageBanner homeBannerTitle="We aim to go beyond the horizon, with services not only in India but also in Dubai" button1Text = "Find out more" button2Text = "Our Services" bannerImage = {OfficePeopleImage}/>
            </Slider> */}
            <main>
                <section id="hero-section">
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1>Empowering Financial Success Globally</h1>
                            <p>Delivering trusted Chartered Accountancy services across <strong>India</strong>, <strong>UAE</strong>, <strong>UK</strong> and <strong>the USA</strong>.</p>
                            <div className="hero-buttons">
                                <Link to="/services" className="hero-button primary" onClick={()=>{setCurrentPage('services')}}>Explore Services</Link>
                                <Link to="/contact" className="hero-button secondary" onClick={()=>{setCurrentPage('contact')}}>Contact Us</Link>
                                <Link to="/special-services" className="secondary-button" onClick={()=>{setCurrentPage('special-services')}}> Accounting and filing services for Rs. 1999 only</Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div>
                    <h2 id="sub-heading">Why Choose Us?</h2>
                    <div id="advantage-container">
                        <AdvantageSection advantageImage={RatingIcon} advantageTitle={advTitle1} advantageDescription={advDesc1}/>
                        <AdvantageSection advantageImage={IdeaIcon} advantageTitle={advTitle2} advantageDescription={advDesc2}/>
                        <AdvantageSection advantageImage={CustomerServiceIcon} advantageTitle={advTitle3} advantageDescription={advDesc3}/>
                        <AdvantageSection advantageImage={CustomerSatisfactionIcon} advantageTitle={advTitle4} advantageDescription={advDesc4}/>
                    </div>
                    <h2 id="sub-heading">Popular Services</h2>
                    <div id="popular-services-container">
                        <PopularService popularServiceImg={OfficePeopleImage} popularServiceName={ps1} popularServiceDescription={psd1} popularServiceRouteName="taxation"/>
                        <PopularService popularServiceImg={popularServiceAudit} popularServiceName={ps2} popularServiceDescription={psd2} popularServiceRouteName="audit"/>
                        <PopularService popularServiceImg={popularServiceBA} popularServiceName={ps3} popularServiceDescription={psd3} popularServiceRouteName="ba"/>
                        <PopularService popularServiceImg={popularServiceAccounting} popularServiceName={ps4} popularServiceDescription={psd4} popularServiceRouteName="accounting"/>
                    </div>
                    <h2 id="sub-heading">Want to reach out to us?</h2>
                    <div id="reach-out-container">
                        <BannerImageText Image={contactBannerImg} bannerHeading="Don't worry! We're here!" bannerSubText={bannerSettings} bannerButtonText="Contact Us" buttonLinkPath='/contact'/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}