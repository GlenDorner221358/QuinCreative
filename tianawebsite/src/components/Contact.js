import React from 'react';
import './styling/Contact.css';
import LaptopImage from '../assets/contactLaptop.png';  
import CircularText from '../assets/contactCircularText.svg';  

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>CONTACT <span className="details-highlight">DETAILS</span></h1>
                <img src={LaptopImage} alt="Laptop" className="laptop-image" />
            </div>

            <div className="contact-form-container">
                <div className="form-header">
                    <h2>What do you need?</h2>
                </div>
                <form className="contact-form">
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email address *</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                <img src={CircularText} alt="Get in touch circular text" className="circular-text" />
            </div>
        </div>
    );
};

export default Contact;
