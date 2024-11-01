import React from 'react';
import './styling/About.css';
import Who from '../assets/who.png';

const About = () => {
    return (
        <section className="about">

            <img src={Who} alt="who is quin creative" className='who' /> 

            <div className="about-content">
                <p>QuinCreative combines creativity and precision. We combine artistic ingenuity and functional design to create visual storytelling that connects with audiences and elevates brands.</p>
                <p><strong>Our Story:</strong> QuinCreative was founded on a passion for functional design and believes that great design does more than just look nice; it also works. We add structure to creativity, enabling brands to communicate with purpose and impact.</p>
            </div>
        </section>
    );
};

export default About;
