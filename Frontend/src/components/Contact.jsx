import useReveal from '../useReveal';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const titleRef = useReveal();
  const contentRef = useReveal();

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
              I'm open to opportunities in Software Development and Competitive Programming collaborations. Feel free to reach out!
            </p>

            <div className="contact-links">
              <a href="tel:+918273593238" className="contact-link-item">
                <FaPhoneAlt className="contact-link-icon" />
                <div>
                  <span className="contact-link-label">Phone</span>
                  <span className="contact-link-value">+91 8273593238</span>
                </div>
              </a>

              <a href="mailto:lakshyatyagifeb@gmail.com" className="contact-link-item">
                <FaEnvelope className="contact-link-icon" />
                <div>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">lakshyatyagifeb@gmail.com</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/lakshya-tyagi-086211233/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <FaLinkedin className="contact-link-icon" />
                <div>
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">lakshya-tyagi-086211233</span>
                </div>
              </a>

              <a href="https://github.com/LakshyaTyagi15" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <FaGithub className="contact-link-icon" />
                <div>
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">LakshyaTyagi15</span>
                </div>
              </a>

              <div className="contact-link-item">
                <FaMapMarkerAlt className="contact-link-icon" />
                <div>
                  <span className="contact-link-label">Location</span>
                  <span className="contact-link-value">Kanpur, India</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input type="text" id="name" required className="form-input" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input type="email" id="email" required className="form-input" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea id="message" rows="5" required className="form-input" placeholder="What's on your mind?"></textarea>
            </div>
            <button type="submit" className="btn-solid btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
