import experiences from "../../data/experience";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FiBriefcase } from "react-icons/fi";
import "./Experience.css";

const Experience = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and work experience
          </p>
        </div>

        <div
          ref={ref}
          className={`experience__timeline reveal ${isVisible ? "visible" : ""}`}
        >
          {experiences.map((exp) => (
            <div key={exp.id} className="experience__card glass-card">
              <div className="experience__icon">
                <FiBriefcase size={22} />
              </div>
              <div className="experience__content">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__position">{exp.position}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__duration">{exp.duration}</span>
                </div>
                {exp.location && (
                  <p className="experience__location">{exp.location}</p>
                )}
                <p className="experience__description">{exp.description}</p>
                <ul className="experience__responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="experience__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
