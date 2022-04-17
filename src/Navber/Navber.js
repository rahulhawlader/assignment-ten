import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <nav>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Services'}>Services</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Login'}>Login</Link>

        </nav>
    );
};

export default Navber;