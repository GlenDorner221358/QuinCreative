import React from 'react';
import './styling/Hero.css';
import Hello from '../assets/Hello.svg';
import MannequinLookinDude from '../assets/MannequinLookinDude.svg';

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero-text">
                <img src={Hello} alt="Hello" className="hero-heading" />
                <p className="hero-description">
                    I'm a designer / photographer that <br />
                    focuses on corporate designing AND a <br />
                    commercial photographer!
                </p>
                <a href="/enquire" className="enquire-button">ENQUIRE</a>
            </div>

            <img src={MannequinLookinDude} alt="Hero Right" className="hero-image" /> 

        </div>
    );
};

export default Hero;
