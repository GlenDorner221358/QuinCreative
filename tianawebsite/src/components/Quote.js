import React from 'react';
import './styling/Quote.css';
import Tiana from '../assets/tianaTrappedInCircle.png';

const Quote = () => {
    return (
        <section className="quote">
            <div className="quote-image">
                <img src={Tiana} alt="Placeholder for Quote" className='tianaInCircle'/>
            </div>
            <div className="quote-content">
                <h3>“Design is clarity in form and purpose—a structure that speaks.”</h3>
                <p>My aim is to build visuals that communicate directly and connect deeply, stripping away the unnecessary to reveal the essential. Every line, every color serves your brand’s message with precision and purpose.</p>
            </div>
        </section>
    );
};

export default Quote;
