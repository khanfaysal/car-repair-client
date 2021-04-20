import React from 'react';
import './Footer.css';
import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const quickLinks = [
        {name: "Our Services" , link: "/home"},
        {name: "Testimonial" , link: "/home"},
        {name: "Blog" , link: "/home"},
    ]
    const ourAddress = [
        {name: "Bangladesh ChakBazar Dhaka -1202" , link: "//google.com/map"},
       
    ]
    const newsLetters = [
        {name: "newsletters" , link: "/home"},
        
    ]
    const contact = [
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-2">
                <div className="row py-5">
                    <FooterColumn key={1} menuTitle="Quick Links" menuItems={quickLinks}/>
                    <FooterColumn key={2} menuTitle="Address" menuItems={ourAddress}/>
                    <FooterColumn key={3} menuTitle="News Letters" menuItems={newsLetters}/>
                    <FooterColumn key={4} menuTitle="Contact" menuItems={contact}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/mdfaysal.khan.71/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div>
                            <h6 className="brand-txt">Call now</h6>
                            <button className="btn brand-btn">+2025550295</button>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright <span>&#169;</span> {(new Date()).getFullYear()} All Rights Reserved Faysal Khan</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;