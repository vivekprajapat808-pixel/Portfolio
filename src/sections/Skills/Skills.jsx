import skillsData from "../../data/skills";
import useScrollReveal from "../../hooks/useScrollReveal";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import "./Skills.css";

const categoryMeta = {
  frontend: { title: "Frontend", icon: FiMonitor, color: "#6c63ff" },
  backend: { title: "Backend", icon: FiServer, color: "#48c6ef" },
  database: { title: "Database", icon: FiDatabase, color: "#34d399" },
  tools: { title: "Tools", icon: FiTool, color: "#fbbf24" },
};

const Skills = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div
          ref={ref}
          className={`skills__grid reveal ${isVisible ? "visible" : ""}`}
        >
          {Object.entries(skillsData).map(([key, items]) => {
            const meta = categoryMeta[key];
            const Icon = meta.icon;
            return (
              <div key={key} className="skills__category glass-card">
                <div className="skills__category-header">
                  <div
                    className="skills__category-icon"
                    style={{ color: meta.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="skills__category-title">{meta.title}</h3>
                </div>
                <div className="skills__list">
                  {items.map((skill) => (
                    <div key={skill.name} className="skills__item">
                      <span className="skills__item-dot" style={{ background: meta.color }} />
                      <span className="skills__item-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
