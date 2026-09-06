import { useState } from "react";
import useReveal from "../useReveal";
import Toast from "./Toast";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const titleRef = useReveal();
    const contentRef = useReveal();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        content: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({
        visible: false,
        message: "",
        type: "success",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/v1/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setToast({
                    visible: true,
                    message: "Message sent successfully! Thank you.",
                    type: "success",
                });
                setFormData({ name: "", email: "", content: "" });
            } else {
                setToast({
                    visible: true,
                    message: data.message || "Failed to send message.",
                    type: "error",
                });
            }
        } catch {
            setToast({
                visible: true,
                message: "Network error. Please try again.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <hr className="section-divider" />

                <div className="reveal" ref={titleRef}>
                    <p className="section-label">04 — Contact</p>
                    <h2 className="section-title">Get In Touch</h2>
                </div>

                <div className="contact-layout reveal" ref={contentRef}>
                    <div className="contact-info">
                        <p className="contact-intro">
                            I'm open to opportunities in Software Development
                            and Competitive Programming collaborations. Feel
                            free to reach out!
                        </p>

                        <div className="contact-links">
                            <a
                                href="tel:+918273593238"
                                className="contact-link-item"
                            >
                                <FaPhoneAlt className="contact-link-icon" />
                                <div>
                                    <span className="contact-link-label">
                                        Phone
                                    </span>
                                    <span className="contact-link-value">
                                        +91 8273593238
                                    </span>
                                </div>
                            </a>

                            <a
                                href="mailto:lakshyatyagifeb@gmail.com"
                                className="contact-link-item"
                            >
                                <FaEnvelope className="contact-link-icon" />
                                <div>
                                    <span className="contact-link-label">
                                        Email
                                    </span>
                                    <span className="contact-link-value">
                                        lakshyatyagifeb@gmail.com
                                    </span>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com/in/lakshya-tyagi-086211233/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link-item"
                            >
                                <FaLinkedin className="contact-link-icon" />
                                <div>
                                    <span className="contact-link-label">
                                        LinkedIn
                                    </span>
                                    <span className="contact-link-value">
                                        lakshya-tyagi-086211233
                                    </span>
                                </div>
                            </a>

                            <a
                                href="https://github.com/LakshyaTyagi15"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link-item"
                            >
                                <FaGithub className="contact-link-icon" />
                                <div>
                                    <span className="contact-link-label">
                                        GitHub
                                    </span>
                                    <span className="contact-link-value">
                                        LakshyaTyagi15
                                    </span>
                                </div>
                            </a>

                            <div className="contact-link-item">
                                <FaMapMarkerAlt className="contact-link-icon" />
                                <div>
                                    <span className="contact-link-label">
                                        Location
                                    </span>
                                    <span className="contact-link-value">
                                        Bijnor, India
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label
                                className="form-label"
                                htmlFor="contact-name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                required
                                className="form-input"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                className="form-label"
                                htmlFor="contact-email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                required
                                className="form-input"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                className="form-label"
                                htmlFor="contact-message"
                            >
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="content"
                                rows="5"
                                required
                                className="form-input"
                                placeholder="What's on your mind?"
                                value={formData.content}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn-solid btn-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.visible}
                onClose={() =>
                    setToast((prev) => ({ ...prev, visible: false }))
                }
            />
        </section>
    );
};

export default Contact;
