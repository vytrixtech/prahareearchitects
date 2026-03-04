import { useState } from 'react';
import { Mail, MapPin, Instagram, Phone, Send } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        const formSubmitData = {
            ...formData,
            access_key: "d5d998f9-5e0b-44b6-b57d-971dc55ac75d"
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formSubmitData)
            });
            const result = await response.json();
            if (result.success) {
                setStatusMessage({ type: 'success', text: 'Thanks for your enquiry! Our architectural team will reach out to you shortly.' });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setStatusMessage(null), 8000);
            } else {
                setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <header className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: 'url(/images/bg_contact.jpg)' }}></div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content fade-in">
                    <h1>Contact Us</h1>
                    <p>Get in touch with Praharee Architects & Planners.</p>
                </div>
            </header>

            <section className="contact-content section-padding">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Information */}
                        <div className="contact-info fade-in">
                            <h4 className="subtitle">Get In Touch</h4>
                            <h2>Let's Discuss Your Next Dream Project</h2>
                            <p className="contact-intro">
                                Whether you're looking to build your dream home, design a commercial complex, or need expert planning consultation, we're here to help. Reach out to us today.
                            </p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h3>Office Location</h3>
                                        <p>Vijayawada, Andhra Pradesh<br />India</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h3>Phone Number</h3>
                                        <a href="tel:+919493280722">+91 94932 80722</a>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h3>Email Address</h3>
                                        <a href="mailto:prahareearchitects@gmail.com">prahareearchitects@gmail.com</a>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <Instagram size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h3>Social Media</h3>
                                        <a href="https://instagram.com/praharee_architects" target="_blank" rel="noopener noreferrer">@praharee_architects</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper fade-in" style={{ transitionDelay: '0.2s' }}>
                            <form className="contact-form bg-white" onSubmit={handleSubmit}>
                                <h3 className="form-title">Send a Message</h3>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject *"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Your Message *"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className="ms-2" />
                                </button>

                                {statusMessage && (
                                    <div className={`form-status-message ${statusMessage.type}`}>
                                        {statusMessage.text}
                                    </div>
                                )}
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section fade-in">
                <iframe
                    title="Praharee Architects Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.6961605388!2d80.55172346747206!3d16.510340331005703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7ea331bc40c!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709121234567!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

        </div>
    );
};

export default Contact;
