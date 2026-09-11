import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import portfolioConfig from "../../data/portfolioConfig";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Hero.css";

const Hero = () => {
  const [ref, isVisible] = useScrollReveal();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-grid" />
      <div className="container hero__container">
        <div
          ref={ref}
          className={`hero__content ${isVisible ? "visible" : ""}`}
        >
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">{portfolioConfig.name}</h1>
          <h2 className="hero__role">{portfolioConfig.role}</h2>
          <p className="hero__description">{portfolioConfig.shortBio}</p>

          <div className="hero__buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Projects
              <FiArrowDown size={16} />
            </button>
            {portfolioConfig.resume ? (
              <a
                href={portfolioConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            ) : (
              <span className="btn btn-secondary" style={{ opacity: 0.5 }}>
                Download Resume
              </span>
            )}
            <button className="btn btn-outline btn-sm" onClick={scrollToContact}>
              Contact Me
            </button>
          </div>

          <div className="hero__socials">
            {portfolioConfig.github && (
              <a
                href={portfolioConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            )}
            {portfolioConfig.linkedin && (
              <a
                href={portfolioConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            )}
            {!portfolioConfig.github && !portfolioConfig.linkedin && (
              <p className="hero__social-placeholder">
                Add your GitHub & LinkedIn URLs in portfolioConfig.js
              </p>
            )}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__code-block">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">developer.js</span>
            </div>
            <pre className="hero__code-content">
              <code>
{`const developer = {
  name: "${portfolioConfig.name}",
  role: "Frontend Developer",
  skills: ["React", "Redux",
           "JavaScript", "MERN"],
  passion: "Building great UIs",
  available: true
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
