import portfolioConfig from "../../data/portfolioConfig";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FiCode, FiLayers, FiMonitor, FiDatabase } from "react-icons/fi";
import "./About.css";

const statIcons = [FiCode, FiLayers, FiMonitor, FiDatabase];

const About = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me and what drives my passion for development
          </p>
        </div>

        <div
          ref={ref}
          className={`about__grid reveal ${isVisible ? "visible" : ""}`}
        >
          <div className="about__text">
            <h3 className="about__heading">A Passionate Developer</h3>
            <p className="about__description">
              {portfolioConfig.aboutDescription}
            </p>
            <p className="about__description">
              I focus on writing clean, efficient code and creating intuitive user
              interfaces. Whether it's a single-page application or a full-stack
              project, I bring dedication and attention to detail to every
              project I work on.
            </p>
            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon">⚡</span>
                <span>Quick Learner</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">🎯</span>
                <span>Detail Oriented</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">🤝</span>
                <span>Team Player</span>
              </div>
            </div>
          </div>

          <div className="about__stats">
            {portfolioConfig.stats.map((stat, index) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <div key={stat.label} className="about__stat-card glass-card">
                  <Icon className="about__stat-icon" size={28} />
                  <h4 className="about__stat-value">{stat.value}</h4>
                  <p className="about__stat-label">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
