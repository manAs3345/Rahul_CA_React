import './index.css';
import bannerImage from '../../images/office_people.jpg'
import { Banner } from '../../components/banner';
import { Topnavbar } from '../../components/navbar';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { Footer } from '../../components/footer';
import contactDetails from '../../images/contact-section-bg.jpg';

export function Contact(){
    function handleSubmit(e){
        e.preventDefault();
        const fromMail = e.target[1].value;
        const name = e.target[0].value;
        console.log(fromMail);
        const subject = 'Contact Enquiry'
        const message = e.target[2].value;
        fetch('http://localhost:5000/email/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fromMail, subject, message, name })
        })
        .then(response => response.json())
        .then(data => console.log("Email sent successfully."))
        .catch(error => console.error('Error:', error));
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
            <div class="office-location-container">
                <h1>Find us here</h1>
                <div id='google-maps-container'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.7005566355765!2d73.8424305749658!3d18.632533582482885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7e9b6b76d2d%3A0x252c81a8815708f3!2sVishwa%20Recidency!5e0!3m2!1sen!2ssg!4v1719907201872!5m2!1sen!2ssg" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Office Address"></iframe></div>
            </div>
            <Footer/>
        </>
    );
}