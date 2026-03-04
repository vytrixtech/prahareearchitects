import { Link } from 'react-router-dom';
import { Building2, Compass, PenTool, Home as HomeIcon, CheckCircle, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ImageLoader from '../components/ImageLoader';
import './Home.css';

const Home = () => {
    useScrollAnimation();

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{ backgroundImage: 'url(/images/hero_home.jpg)' }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="fade-in">Designing Meaningful Spaces</h1>
                    <p className="fade-in" style={{ transitionDelay: '0.2s' }}>Innovative Architecture & Planning Solutions in Vijayawada</p>
                    <div className="hero-buttons fade-in" style={{ transitionDelay: '0.4s' }}>
                        <Link to="/services" className="btn-primary">Our Services</Link>
                        <Link to="/contact" className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="intro section-padding">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text fade-in">
                            <h4 className="subtitle">Welcome to Praharee Architects</h4>
                            <h2>We Build Your Dreams Into Reality</h2>
                            <p>
                                Praharee Architects & Planners is an architecture and planning firm based in Vijayawada, specializing in innovative architectural design, planning solutions, and interior environments. Our approach blends functionality, aesthetics, and sustainability to create meaningful spaces.
                            </p>
                            <ul className="intro-features">
                                <li><CheckCircle className="feature-icon" size={20} /> Innovative Design Approach</li>
                                <li><CheckCircle className="feature-icon" size={20} /> Sustainable Planning</li>
                                <li><CheckCircle className="feature-icon" size={20} /> Client-Centric Solutions</li>
                            </ul>
                            <Link to="/about" className="link-button mt-4">Read our story <ArrowRight size={18} /></Link>
                        </div>
                        <div className="intro-image-container fade-in" style={{ transitionDelay: '0.2s' }}>
                            <ImageLoader
                                src="/images/bg_projects.jpg"
                                alt="Modern Architecture Building"
                                className="intro-image"
                                loading="lazy"
                            />
                            <div className="experience-badge">
                                <span className="years">4+</span>
                                <span className="text">Years of<br />Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="services-preview section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center fade-in">
                        <h4 className="subtitle">What We Do</h4>
                        <h2>Our Core Services</h2>
                        <div className="separator"></div>
                    </div>

                    <div className="services-preview-grid">
                        {/* Service 1 */}
                        <Link to="/services" className="service-preview-card fade-in">
                            <div className="service-icon-wrapper">
                                <Building2 size={32} />
                            </div>
                            <h3 className="service-title">Architectural Design</h3>
                            <p>Creating visionary designs that balance form, function, and aesthetic appeal.</p>
                        </Link>

                        {/* Service 2 */}
                        <Link to="/services" className="service-preview-card fade-in" style={{ transitionDelay: '0.1s' }}>
                            <div className="service-icon-wrapper">
                                <PenTool size={32} />
                            </div>
                            <h3 className="service-title">Interior Design</h3>
                            <p>Crafting interior spaces that enhance comfort, workflow, and visual harmony.</p>
                        </Link>

                        {/* Service 3 */}
                        <Link to="/services" className="service-preview-card fade-in" style={{ transitionDelay: '0.2s' }}>
                            <div className="service-icon-wrapper">
                                <Compass size={32} />
                            </div>
                            <h3 className="service-title">Planning & Approvals</h3>
                            <p>Navigating structural complexities and securing necessary municipal approvals.</p>
                        </Link>

                        {/* Service 4 */}
                        <Link to="/services" className="service-preview-card fade-in" style={{ transitionDelay: '0.3s' }}>
                            <div className="service-icon-wrapper">
                                <HomeIcon size={32} />
                            </div>
                            <h3 className="service-title">Residential Projects</h3>
                            <p>Designing modern, sustainable homes tailored to your lifestyle.</p>
                        </Link>
                    </div>

                    <div className="text-center mt-5 fade-in">
                        <Link to="/services" className="btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding">
                <div className="cta-bg" style={{ backgroundImage: 'url(/images/cta_home.jpg)' }}></div>
                <div className="cta-overlay"></div>
                <div className="container text-center cta-content fade-in">
                    <h2>Ready to Start Your Next Project?</h2>
                    <p>Let's collaborate to create something extraordinary.</p>
                    <Link to="/contact" className="btn-white">Book a Consultation</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;



