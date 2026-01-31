import './index.css';
import bannerImage from '../../images/office_people.jpg'
import { Banner } from '../../components/banner';
import { Topnavbar } from '../../components/navbar';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { Footer } from '../../components/footer';
import contactDetails from '../../images/contact-section-bg.jpg';
import { useState } from 'react';

export function Contact(){
    const [formData,setFormData] = useState({
        fromMail:'',
        subject:'Contact Enquiry',
        name:'',
        message:''
    });
    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
        // const fromMail = e.target[1].value;
        // const name = e.target[0].value;
        // console.log(fromMail);
        // const subject = 'Contact Enquiry'
        // const message = e.target[2].value;
        const devLink="http://localhost:5000/email/sendEmail";
        const prodLink="https://carahulbackend.onrender.com/email/sendEmail";
        fetch(prodLink, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            const text = await response.text();
            try {
                const data = JSON.parse(text);
                if (!response.ok) throw new Error(data.message);
                console.log("Success:", data);
            } catch {
                throw new Error(text);
            }
        })
        .catch(error => console.error("Error:", error.message));
    }
    return(
        <>
            <Topnavbar/>
            <Banner bannerBackgroundImage={bannerImage} bannerTitle="Just a contact away"/>
            <div id="contact-section-container">
            <div id='contact-section'>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <h1>Reach out to us</h1>
                    <div id="contact-form-input">
                        {/* <label>Name:</label> <br/> */}
                        <input placeholder='Name' type='text' name="name" onChange={handleChange}></input>
                    </div>
                    <div id="contact-form-input">
                        {/* <label>Email Address:</label> <br/> */}
                        <input placeholder='Email' type='email' name="fromMail" onChange={handleChange}></input>
                    </div>
                    <div id="contact-form-textarea">
                        {/* <label>Message:</label> <br/> */}
                        <textarea placeholder='Message' name="message" onChange={handleChange}></textarea>
                    </div>
                    <button>Contact</button>
                </form>
                <div id="contact-details">
                    <div id="contact-detail">
                        <h2>Call Us:</h2>
                        <p>+91 7972934299 or +91 9637065582</p>
                    </div>
                    <div id="contact-detail">
                        <h2>Email Us At:</h2>
                        <p>somani01.rs@outlook.com</p>
                    </div>
                    <div id="contact-detail">
                        <h2>Find Us At:</h2>
                        <p>Row House-13, Vishwa Residency, Sector – 1, Indrayaninagar, Bhosari, Pune 411039</p>
                    </div>
                </div>
            </div>
            <img src={contactDetails} id="contact-details-img"/>
            </div>
            <Footer/>
        </>
    );
}