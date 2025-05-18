import React from "react";
import './index.css';
import { Link } from 'react-router-dom';
import CALogo from '../../images/ca_logo.png';
import ldIcon from '../../images/linkedin.png';

export function Footer(){
    return(
        <footer>
            <div id="footer-section-1">
            <Link to="/"><img src= {CALogo} alt="" id="logo-img"/></Link>
                <p id="footer-section-heading">Key Pages</p>
                <ul id="footer-page-links">
                    <Link to='/'><li id="links">Home</li></Link>
                    <Link to='/about'><li id="links">About Us</li></Link>
                    <Link to='/services'><li id="links">Services</li></Link>
                    <Link to='/contact'><li id="links">Contact Us</li></Link>
                </ul>
            </div>
            <div id="footer-section-2">
                <p id="footer-section-heading">Useful Links</p>
                <ul id="additional-links">
                    <li><a target="_blank" rel="noreferrer" href="https://www.bankbazaar.com/tax/tax-deduction-and-types.html">Understand common tax deductions</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://mashable.com/article/tax-scams-to-avoid">Tax scams to watchout for</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.icicibank.com/blogs/mutual-fund/capital-gains-tax">Tax Implications of Investments</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.shopify.com/sg/retail/small-business-tax-tips">Small Business Tax Tips</a></li>
                </ul>
            </div>
            <div id="footer-section-3">
                <p id="footer-section-heading">Find us on
                </p>
                <ul id="links">
                    <li><a href="https://www.linkedin.com" target='_blank'><img id="social-media-icon" src={ldIcon}/></a></li>
                </ul>
            </div>
        </footer>
    );
}