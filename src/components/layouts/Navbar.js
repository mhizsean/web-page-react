/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../logo3.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg " >
            <Link className="navbar-brand ml-5" to="/">
                <img src={logo} alt="" style={{width: '50px'}}/>    
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars" style={{color: '#fff'}}></i>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-uppercase ml-5" to="/">
                            Home &nbsp; <i className="fas fa-home"></i>
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link  text-uppercase ml-5" to="/latest">Latest</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-5" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-5" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase ml-5" to="/contact">Contact Us</Link>
                    </li>
                </ul>               
            </div>
        </nav>
    )
}

export default Navbar;