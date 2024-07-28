import React from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.jpg"; // Check if the logo.jpg is at this path
import CartWidget from "../CartWidget/CartWidget"; // Check if CartWidget is in the correct folder

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">
                    <img src={logo} className="logo" alt="pinguino logo" />
                </Link>
            </div>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Home</Link></li>
                <li><Link className="menu-link" to="/productos/Cookies">Cookies</Link></li>
                <li><Link className="menu-link" to="/productos/Frozen">Frozen</Link></li>
                <li><Link className="menu-link" to="/productos/Donuts">Donuts</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/Ubicacion">Ubicacion</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar;


