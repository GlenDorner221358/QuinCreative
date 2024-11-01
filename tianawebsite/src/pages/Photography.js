import React from 'react';
import '../components/styling/Photography.css';
import Content from '../assets/PhotographyPage.png';

const Photography = () => {
    return (
        <div className='lazyPage'>
            <img src={Content} alt="missing whole page" className='pageContent' />
            <a href="/contact" className="enquire-button">LET'S CHAT</a>
        </div>
    );
};

export default Photography;