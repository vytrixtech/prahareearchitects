import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer section-padding">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        Praharee <span>Architects</span>
                    </Link>
                    <p className="footer-description">
                        Innovative Architecture & Planning Solutions in Vijayawada. We blend functionality, aesthetics, and sustainability to create meaningful spaces.
                    </p>
                </div>

                <div className="footer-links">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul>
                        <li>
                            <Mail size={18} />
                            <a href="mailto:prahareearchitects@gmail.com">prahareearchitects@gmail.com</a>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span>Vijayawada, Andhra Pradesh</span>
                        </li>
                        <li>
                            <Instagram size={18} />
                            <a href="https://instagram.com/praharee_architects" target="_blank" rel="noopener noreferrer">@praharee_architects</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Praharee Architects & Planners Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
