import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Apointa</div>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/book">Book Appointment</Link>
                <Link to="/pharmacy">Pharmacy</Link>
            </div>
        </nav>
    );
};

export default Navbar;