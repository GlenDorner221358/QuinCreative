import React from 'react';
import './styling/Navbar.css';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={Logo} alt="Logo" /> 
                </div>
                <ul className="nav-links">
                    <Link to="/"> <li>Home</li> </Link>
                    <li>About</li>
                    <li>Design</li>
                    <li>Photography</li>
                    <Link to="/contact"> <li>Contact</li> </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
