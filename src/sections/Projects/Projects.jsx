import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/projectSlice";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Projects.css";

const Projects = () => {
  const dispatch = useDispatch();
  const { filteredProjects, activeFilter, categories } = useSelector(
    (state) => state.projects
  );
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A collection of projects I've built to solve real-world problems
          </p>
        </div>

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn ${
                activeFilter === cat ? "projects__filter-btn--active" : ""
              }`}
              onClick={() => dispatch(setFilter(cat))}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`projects__grid reveal ${isVisible ? "visible" : ""}`}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
