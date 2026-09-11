import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import portfolioConfig from "../../data/portfolioConfig";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "/#about" },
  { name: "Skills", path: "/#skills" },
  { name: "Projects", path: "/#projects" },
  { name: "Experience", path: "/#experience" },
  { name: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e, path) => {
    if (path.startsWith("/#")) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        // React Router will handle the navigation, then we scroll
        window.location.href = path;
        return;
      }
      e.preventDefault();
      const id = path.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          {portfolioConfig.name.split(" ")[0]}
          <span className="navbar__logo-dot">.</span>
        </Link>

        <div className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.path)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button
              className="navbar__theme-toggle"
              onClick={() => dispatch(toggleTheme())}
              aria-label="Toggle theme"
            >
              {themeMode === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {portfolioConfig.resume && (
              <a
                href={portfolioConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm navbar__resume-btn"
              >
                <FiDownload size={14} />
                Resume
              </a>
            )}
            {!portfolioConfig.resume && (
              <span className="btn btn-primary btn-sm navbar__resume-btn navbar__resume-btn--placeholder">
                <FiDownload size={14} />
                Resume
              </span>
            )}
          </div>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
