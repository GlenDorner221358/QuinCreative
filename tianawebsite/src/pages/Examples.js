import React from 'react';
import '../components/styling/Examples.css';
import Content from '../assets/ExamplesPage.png';

const Examples = () => {
    return (
        <div className='lazyPage'>
            <img src={Content} alt="missing whole page" className='pageContent' />
            <a href="/contact" className="chat-button">LET'S CHAT</a>
        </div>
    );
};

export default Examples;