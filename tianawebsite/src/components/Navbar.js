import React from 'react';
import './styling/Navbar.css';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={Logo} alt="Logo" /> 
                </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Design</li>
                    <li>Photography</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
