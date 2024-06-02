import './index.css';
import peopleGuidingImage from '../../images/people_guidance.jpg';

export function Section1(props){
    return(
        <div id="section1-container">
            <div id='section1-content-1'>
                <h1>
                    At R V Somani & Co., we ensure that we commit ourselves to the highest standards of technical knowledge in the area of Finance, Accounting and Taxation</h1>
                <div>
                    At our company, we pride ourselves on being professional Chartered Accountants who operate in a cutting-edge environment. We leverage technology to ensure all our work is completed efficiently and on time. Our audits are meticulous, focused on accuracy and maintaining the highest quality standards. We go beyond just meeting deadlines – we actively track performance metrics that are critical to our business and quality of service. We use Value Stream Mapping and Ideation techniques to constantly identify areas for improvement and drive overall quality within the firm
                </div>
            </div>
            <div id='section2-content-2'>
                <img src={peopleGuidingImage} id='section2-content-img'/>
                <div>
                    <p>Industries served</p>
                    <div id='industries-container'>
                        <div id='industry-container'>Hotels</div>
                        <div id='industry-container'>Manufacturing</div>
                        <div id='industry-container'>Constructions</div>
                        <div id='industry-container'>Technology</div>
                        <div id='industry-container'>Retail</div>
                        <div id='industry-container'>Logistics</div>
                        <div id='industry-container'>Transport</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
