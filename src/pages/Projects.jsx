import { ArrowRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
    useScrollAnimation();

    const projectsList = [
        {
            id: 1,
            title: "Residence design",
            category: "Residential Architecture",
            client: "Lingaraju garu",
            location: "Rajahmundry",
            description: "A comprehensive residential design in Rajahmundry, balancing modern aesthetic living with functional spatial planning.",
            image: "/images/project1.png",
            delay: "0s"
        },
        {
            id: 2,
            title: "Public node",
            category: "Public Planning",
            client: "Thadepalli Municipal Commissioner",
            location: "Thadepalli near C.M. House",
            description: "A strategic public node design near the C.M. House in Thadepalli, focused on community usability and urban flow.",
            image: "/images/project2.png",
            delay: "0.1s"
        },
        {
            id: 3,
            title: "Group House Elevation",
            category: "Residential Elevation",
            client: "Mr. Shanmukha Garu",
            location: "Vijayawada",
            description: "An elegant group housing elevation showcasing modern structural aesthetics and comfortable multi-family living layout.",
            image: "/images/project3.jpg",
            delay: "0.2s"
        },
        {
            id: 4,
            title: "BUS STOP",
            category: "Public Infrastructure",
            client: "Municipal Corporation",
            location: "Ramachandrapuram",
            description: "A modern public bus stop infrastructure project focused on commuter comfort, durability, and a clean, accessible design.",
            image: "/images/project4.jpg",
            delay: "0.3s"
        },
        {
            id: 5,
            title: "Project Terra",
            category: "Premium Residential",
            client: "Private Client",
            location: "Ravulapalem",
            description: "A premium luxury residential design in Ravulapalem, featuring sophisticated materials, open spaces, and custom architectural detailing.",
            image: "/images/project5.jpg",
            delay: "0.4s"
        },
        {
            id: 6,
            title: "Kankatala Jewellers",
            category: "Commercial Interior",
            client: "Kankatala Jewellers",
            location: "Ravulapalem",
            description: "A luxurious and elegant commercial retail space designed to highlight high-end jewelry through strategic lighting and premium finishes.",
            image: "/images/project6.jpg",
            delay: "0.5s"
        }
    ];

    return (
        <div className="projects-page bg-light">
            {/* Page Header */}
            <header className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: 'url(/images/bg_projects.jpg)' }}></div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content fade-in">
                    <h1>Our Projects</h1>
                    <p>A showcase of our finest architectural and design works.</p>
                </div>
            </header>

            {/* Projects Grid Section */}
            <section className="projects-list section-padding">
                <div className="container">
                    <div className="projects-grid">
                        {projectsList.map((project) => (
                            <div
                                key={project.id}
                                className="project-card fade-in"
                                style={{ transitionDelay: project.delay }}
                            >
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                                    <div className="project-overlay">
                                        <div className="project-icon">
                                            <Maximize2 size={24} />
                                        </div>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-meta">
                                        {project.client && <div className="meta-item"><span className="meta-label">Client:</span> {project.client}</div>}
                                        {project.location && <div className="meta-item"><span className="meta-label">Location:</span> {project.location}</div>}
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    <Link to="/contact" className="project-link">
                                        View Details <ArrowRight size={16} className="ms-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="project-cta text-center fade-in">
                <div className="container border-top pt-5 pb-5">
                    <h3 className="mb-3">Inspired by our work?</h3>
                    <p className="text-muted mb-4 max-w-600 mx-auto">Let's discuss how we can bring your architectural vision to life with our expertise.</p>
                    <Link to="/contact" className="btn-primary">Start Your Project</Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;
