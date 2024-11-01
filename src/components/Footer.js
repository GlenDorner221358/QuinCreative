import React from 'react';
import './styling/Footer.css';
import FooterIcons from '../assets/footerMiddleImage.svg';

// footer nonsens
import Website from '../assets/footerWebsite.png';
import Email from '../assets/footerEmail.png';
import Insta from '../assets/footerInsta.png';
import Behance from '../assets/footerBehance.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>

                <div className="footer-content">
                    <img src={Website} alt="website link" className='website' />
                    <img src={Insta} alt="instagram link" />
                </div>
                
                <div className="footer-icons">
                    <img src={FooterIcons} alt="footer icons" />
                </div>

                <div className="social-media">
                    <img src={Email} alt="email link" className='email' />
                    <img src={Behance} alt="behance link" />
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
