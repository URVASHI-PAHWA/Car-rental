import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';
import './Nav.css';
import { HashLink as Link } from 'react-router-hash-link';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="Home">
                    &nbsp;&nbsp;<FaCar></FaCar>
                    <span className="navbar-brand mb-auto mt-3 h1 font-monospace fw-bold"><strong className="car">CAR</strong></span>
                </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="Home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="Offers">Offers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="Book">Book</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="Home#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;