// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Quote />
            <Footer />
        </div>
    );
}

export default App;
