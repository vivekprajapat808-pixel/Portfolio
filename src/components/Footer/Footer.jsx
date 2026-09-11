import portfolioConfig from "../../data/portfolioConfig";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <h3 className="footer__name">{portfolioConfig.name}</h3>
          <p className="footer__role">{portfolioConfig.role}</p>
        </div>

        <div className="footer__socials">
          {portfolioConfig.github && (
            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
          {portfolioConfig.linkedin && (
            <a
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          )}
          {portfolioConfig.email && (
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="footer__social-link"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          )}
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
