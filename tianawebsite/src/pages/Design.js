import React from 'react';
import '../components/styling/Design.css';
import Section1 from '../assets/DesignPageSection1.png';
import Section2 from '../assets/DesignPageSection2.png';
import Section3 from '../assets/DesignPageSection3.png';
import Section4 from '../assets/DesignPageSection4.png';
import Section5 from '../assets/DesignPageSection5.png';

const Design = () => {
    return (
        <div>

            <img src={Section1} alt="missing whole page" className='pageContent' />
            <a href="/examples" className="chat-button1">TAKE A PEEK</a>

            <img src={Section2} alt="missing whole page" className='pageContent section2' />
            <a href="/contact" className="chat-button2">TAKE A PEEK</a>

            <img src={Section3} alt="missing whole page" className='pageContent section3' />
            <a href="/contact" className="chat-button3">TAKE A PEEK</a>

            <img src={Section4} alt="missing whole page" className='pageContent' />
            <a href="/contact" className="chat-button4">TAKE A PEEK</a>

            <img src={Section5} alt="missing whole page" className='pageContent' />
            <div className='oneButton'>
                <a href="/contact" className="chat-button5">LET'S CHAT</a>
            </div>

        </div>
    );
};

export default Design;