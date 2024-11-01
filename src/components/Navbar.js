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
                    <Link to="/quincreative"> <li>Home</li> </Link>
                    <Link to="/design"> <li>Design</li> </Link>
                    <Link to="/photography"> <li>Photography</li> </Link>
                    <Link to="/examples"> <li>Examples</li> </Link>
                    <Link to="/contact"> <li>Contact</li> </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
