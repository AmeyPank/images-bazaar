import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">Images Bazaar &copy; 2023. All rights reserved.</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/amey.pankanti/" className="footer-icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/ameypankanti" className="footer-icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/amey_formal/" className="footer-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/amey-pankanti-260898189/" className="footer-icon">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/AmeyPank" className="footer-icon">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
