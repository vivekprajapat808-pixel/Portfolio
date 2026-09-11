import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card glass-card">
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card__image-placeholder">
            <span>{project.title[0]}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <Link
            to={`/projects/${project.id}`}
            className="project-card__view-btn"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.shortDescription}</p>

        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className="btn btn-primary btn-sm" style={{ opacity: 0.4, cursor: 'default' }}>
              <FiExternalLink size={14} />
              Live Demo
            </span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <FiGithub size={14} />
              GitHub
            </a>
          ) : (
            <span className="btn btn-secondary btn-sm" style={{ opacity: 0.4, cursor: 'default' }}>
              <FiGithub size={14} />
              GitHub
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
