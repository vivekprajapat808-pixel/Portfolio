import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = useSelector((state) =>
    state.projects.allProjects.find((p) => p.id === parseInt(id))
  );

  if (!project) {
    return (
      <div className="project-details__not-found">
        <div className="container">
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details">
      <div className="container">
        <button
          className="project-details__back"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={18} />
          Back
        </button>

        <div className="project-details__hero">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="project-details__image"
            />
          ) : (
            <div className="project-details__image-placeholder">
              <span>{project.title}</span>
            </div>
          )}
        </div>

        <div className="project-details__content">
          <div className="project-details__main">
            <h1 className="project-details__title">{project.title}</h1>
            <p className="project-details__description">
              {project.description}
            </p>

            {project.features && project.features.length > 0 && (
              <div className="project-details__features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="project-details__sidebar">
            <div className="project-details__tech glass-card">
              <h3>Technologies</h3>
              <div className="project-details__tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-details__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-details__actions">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </a>
              ) : (
                <span className="btn btn-primary" style={{ opacity: 0.4, cursor: "default" }}>
                  <FiExternalLink size={16} />
                  Live Demo
                </span>
              )}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FiGithub size={16} />
                  View Code
                </a>
              ) : (
                <span className="btn btn-secondary" style={{ opacity: 0.4, cursor: "default" }}>
                  <FiGithub size={16} />
                  View Code
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
