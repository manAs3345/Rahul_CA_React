import './index.css';
import bannerImage from '../../images/office_people.jpg'
import { Banner } from '../../components/banner';
import { Topnavbar } from '../../components/navbar';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { Footer } from '../../components/footer';
import contactDetails from '../../images/contact-section-bg.jpg';

export function Contact(){
    return(
        <>
            <Topnavbar/>
            <Banner bannerBackgroundImage={bannerImage} bannerTitle="Contact Us"/>
            <div id='contact-section'>
                <form id="contact-form">
                    <h1>Reach out to us</h1>
                    <div id="contact-form-input">
                        {/* <label>Name:</label> <br/> */}
                        <input placeholder='Name' type='text'></input>
                    </div>
                    <div id="contact-form-input">
                        {/* <label>Email Address:</label> <br/> */}
                        <input placeholder='Email' type='email'></input>
                    </div>
                    <div id="contact-form-textarea">
                        {/* <label>Message:</label> <br/> */}
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <button>Contact</button>
                </form>
                <div id="contact-details">
                    <div id="contact-detail">
                        <h2>Call Us:</h2>
                        <p>7972934299 or 9637065582</p>
                    </div>
                    <div id="contact-detail">
                        <h2>Email Us At:</h2>
                        <p>somani01.rs@outlook.com</p>
                    </div>
                </div>
            </div>
            <img src={contactDetails} id="contact-details-img"/>
            <Footer/>
        </>
    );
}