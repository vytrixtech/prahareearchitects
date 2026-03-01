import { Building2, PenTool, Layout, Home as HomeIcon, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
    useScrollAnimation();

    const servicesList = [
        {
            id: 1,
            icon: <Building2 size={40} />,
            title: "Architectural Design",
            description: "Comprehensive architectural solutions from conceptualization to execution, balancing aesthetics with structural integrity.",
            delay: "0s"
        },
        {
            id: 2,
            icon: <PenTool size={40} />,
            title: "Interior Design",
            description: "Creating functional, beautiful interior environments that reflect your personality and optimize spatial workflow.",
            delay: "0.1s"
        },
        {
            id: 3,
            icon: <Layout size={40} />,
            title: "Planning & Approvals",
            description: "Expert navigation of municipal regulations, securing necessary permits and ensuring compliant, efficient project planning.",
            delay: "0.2s"
        },
        {
            id: 4,
            icon: <HomeIcon size={40} />,
            title: "Residential Projects",
            description: "Designing bespoke modern homes, villas, and apartments that offer unparalleled comfort and sustainable living.",
            delay: "0.3s"
        },
        {
            id: 5,
            icon: <Briefcase size={40} />,
            title: "Commercial Projects",
            description: "Developing innovative commercial spaces, offices, and retail environments designed to elevate your business presence.",
            delay: "0.4s"
        },
        {
            id: 6,
            icon: <Users size={40} />,
            title: "Consultation Services",
            description: "Providing expert advice on site selection, feasibility studies, vaastu compliance, and sustainable design practices.",
            delay: "0.5s"
        }
    ];

    return (
        <div className="services-page bg-light">
            {/* Page Header */}
            <header className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: 'url(/images/bg_services.jpg)' }}></div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content fade-in">
                    <h1>Our Services</h1>
                    <p>Comprehensive design and planning solutions tailored to your unique vision.</p>
                </div>
            </header>

            {/* Services Grid Section */}
            <section className="services-list section-padding">
                <div className="container">
                    <div className="services-grid">
                        {servicesList.map((service) => (
                            <div
                                key={service.id}
                                className="service-card fade-in"
                                style={{ transitionDelay: service.delay }}
                            >
                                <div className="service-card-inner">
                                    <div className="service-card-front">
                                        <div className="service-card-icon">
                                            {service.icon}
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description.substring(0, 60)}...</p>
                                    </div>
                                    <div className="service-card-hover">
                                        <div className="service-card-icon-hover">
                                            {service.icon}
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <Link to="/contact" className="service-link">
                                            Discuss Project <ArrowRight size={16} className="ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="service-cta text-center fade-in">
                <div className="container border-top pt-5 pb-5">
                    <h3 className="mb-3">Have a specific requirement?</h3>
                    <p className="text-muted mb-4 max-w-600 mx-auto">Our team of experts is ready to discuss your unique project needs and provide tailored solutions.</p>
                    <Link to="/contact" className="btn-primary">Contact Us Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
