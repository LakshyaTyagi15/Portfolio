import useReveal from "../useReveal";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.css";

const projects = [
    {
        title: "VideoTube — Social Media Backend API",
        description:
            "Built a production-style backend platform implementing 7+ core modules including video publishing, tweets, comments, playlists, and subscriptions. Designed 40+ RESTful API endpoints with JWT authentication and robust security. Integrated Multer and Cloudinary for handling 4 types of media assets, and designed complex MongoDB aggregation pipelines for search, filtering, and dashboard analytics across 7 interconnected collections.",
        tech: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Cloudinary",
        ],
        links: {
            github: "https://github.com/LakshyaTyagi15/VideoTube",
        },
    },
    {
        title: "C++ Debug Header",
        description:
            "A lightweight, dependency-free C++ debug header to print STL containers, pairs, tuples, optionals, and user-defined types. Implemented a variadic dbg() macro with clean formatting for nested structures, improving competitive programming debugging speed by 50–60%.",
        tech: ["C++", "Template Metaprogramming", "SFINAE", "Type Traits"],
        links: {
            github: "https://github.com/LakshyaTyagi15/CPP/blob/main/debug.h",
        },
    },
];

const Projects = () => {
    const titleRef = useReveal();
    const gridRef = useReveal();

    return (
        <section className="section" id="projects">
            <div className="container">
                <hr className="section-divider" />

                <div className="reveal" ref={titleRef}>
                    <p className="section-label">03 — Work</p>
                    <h2 className="section-title">Projects</h2>
                </div>

                <div
                    className="projects-grid reveal reveal-stagger"
                    ref={gridRef}
                >
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">
                                {project.description}
                            </p>
                            <div className="project-tech">
                                {project.tech.map((t, idx) => (
                                    <span className="tech-tag" key={idx}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <FaGithub /> Source Code <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
