import useReveal from '../useReveal';
import './Hero.css';

const Hero = () => {
  const revealRef = useReveal();

  return (
    <section className="hero" id="hero">
      <div className="hero-content reveal" ref={revealRef}>
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-title">
          <span className="accent-text">Lakshya</span> Tyagi
        </h1>
        <p className="hero-role">
          Software Developer
        </p>
        <p className="hero-tagline">
          Passionate about DSA, problem solving & building modern software.<br />
          <strong>Codeforces Expert</strong> · <strong>LeetCode Knight</strong> · <strong>ICPC Regional Finalist ×2</strong>
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-solid">View Projects</a>
          <a href="#contact" className="btn-ghost">Get in touch →</a>
        </div>
      </div>

      {/* Subtle floating dots */}
      <div className="hero-dots" aria-hidden="true">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>
        <span className="dot dot-3"></span>
        <span className="dot dot-4"></span>
        <span className="dot dot-5"></span>
      </div>
    </section>
  );
};

export default Hero;
