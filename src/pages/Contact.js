import React from 'react';
import '../components/styling/Contact.css';
import Content from '../assets/ContactPage.png';

const Contact = () => {
    return (
        <div className="contact-page">
            <img src={Content} alt="Page content" className="content" />
        </div>
    );
};

export default Contact;
