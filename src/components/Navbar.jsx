import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Praharee <span>Architects</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="desktop-menu">
                    <ul className="nav-links">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Content */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                    <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                    <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
