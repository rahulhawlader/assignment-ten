import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-style text-center mt-5'>
            <p><small>Copyright @{year} </small></p>
        </footer>
    );
};

export default Footer;