import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Quote from '../components/Quote';
import Services from '../components/Services';
import '../components/styling/Home.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Quote /> 
        </div>
    );
};

export default Home;