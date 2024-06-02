import { Link } from 'react-router-dom';
import './index.css';
import CALogo from '../../images/ca_logo.png';

export function Footer(){
    return(
        <>
        <footer>
            <div id="footer-logo-section">
                <div id="footer-logo">
                        <Link to="/">
                            <img src= {CALogo} alt="" id="logo-img"/>
                        </Link>
                        <div id="websitePages">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="">Contact Us</Link>
                        </div>
                        <p id="companyName">&copy; R V Somani & Co., 2024</p>
                </div>
            </div>
            <div id="footer-section2">
                <p>Usefull articles</p>
                <div id="articleLinks">
                    <a target="_blank" rel="noreferrer" href="https://www.bankbazaar.com/tax/tax-deduction-and-types.html">Understand common tax deductions</a>
                    <a target="_blank" rel="noreferrer" href="https://mashable.com/article/tax-scams-to-avoid">Tax scams to watchout for</a>
                    <a target="_blank" rel="noreferrer" href="https://www.icicibank.com/blogs/mutual-fund/capital-gains-tax">Tax Implications of Investments</a>
                    <a target="_blank" rel="noreferrer" href="https://www.shopify.com/sg/retail/small-business-tax-tips">Small Business Tax Tips</a>
                </div>
            </div>
            <div id="footer-section3">
                <p>Leave a review!</p>
                <form method="post">
                    <input type="text" placeholder="enter your review here"/> <br/>
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </footer>
        </>
    );
}