import { Users, Target, Leaf, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ImageLoader from '../components/ImageLoader';
import './About.css';

const About = () => {
    useScrollAnimation();

    return (
        <div className="about-page">
            {/* Page Header */}
            <header className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: 'url(/images/bg_about.jpg)' }}></div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content fade-in">
                    <h1>About Us</h1>
                    <p>Discover the passion and purpose behind Praharee Architects.</p>
                </div>
            </header>

            {/* Company Overview Section */}
            <section className="overview section-padding">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-image-wrapper fade-in">
                            <ImageLoader
                                src="/images/intro_about.jpg"
                                alt="Architectural Blueprint and Tools"
                                className="overview-image"
                                loading="lazy"
                            />
                            <div className="decoration-box"></div>
                        </div>

                        <div className="overview-text fade-in" style={{ transitionDelay: '0.2s' }}>
                            <h4 className="subtitle">Who We Are</h4>
                            <h2>Dedicated to the Art of Space Making</h2>
                            <div className="separator-left"></div>

                            <div className="text-content">
                                <p>
                                    Praharee Architects & Planners Pvt Ltd is a premier architecture and planning firm based in the vibrant city of Vijayawada, Andhra Pradesh. We are dedicated to delivering innovative, functional, and sustainable design solutions that transform environments.
                                </p>
                                <p>
                                    Our practice is built on the belief that blending creativity with rigorous functionality is the key to crafting spaces that not only inspire but also endure the test of time. Whether it's a intimate residential corner or a expansive commercial complex, our team approaches every project with the same level of commitment and passion.
                                </p>
                                <p>
                                    With years of specialized experience in the region, we have developed a profound understanding of local contexts, materials, and regulations, enabling us to guide our clients seamlessly from concept through to completion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision section-padding bg-light">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card fade-in bg-white shadow-hover">
                            <div className="mv-icon-wrapper">
                                <Target size={40} className="mv-icon" />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To conceptualize and realize architectural spaces that elevate the human experience. We strive to provide comprehensive planning and design solutions that intuitively respond to our clients' unique needs while respecting the environmental and cultural fabric of our surroundings.
                            </p>
                        </div>

                        <div className="mv-card fade-in bg-white shadow-hover" style={{ transitionDelay: '0.2s' }}>
                            <div className="mv-icon-wrapper">
                                <Leaf size={40} className="mv-icon" />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be recognized as a leading force in modern, sustainable architecture across the region. We envision a built environment where every structure contributes positively to its community, harmonizing innovative aesthetics with ecological responsibility and forward-thinking urban planning.
                            </p>
                        </div>

                        <div className="mv-card fade-in bg-white shadow-hover" style={{ transitionDelay: '0.4s' }}>
                            <div className="mv-icon-wrapper">
                                <Users size={40} className="mv-icon" />
                            </div>
                            <h3>Our Philosophy</h3>
                            <p>
                                Architecture is fundamentally collaborative. We maintain a client-centric philosophy, communicating transparently throughout the design journey. By uniting the visionary art of design with pragmatic engineering and planning, we turn ambitious dreams into tangible, enduring realities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner */}
            <section className="about-banner text-center text-white fade-in">
                <div className="banner-bg" style={{ backgroundImage: 'url(/images/bg_services.jpg)' }}></div>
                <div className="banner-overlay"></div>
                <div className="banner-content p-5 position-relative z-index-2">
                    <h2 className="mb-4 text-white">Let's Create Together</h2>
                    <a href="/contact" className="btn-primary mt-3">Start a Conversation <ArrowRight size={18} className="ms-2 inline-icon" /></a>
                </div>
            </section>

        </div>
    );
};

export default About;
