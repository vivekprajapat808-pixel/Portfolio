import { useState } from "react";
import portfolioConfig from "../../data/portfolioConfig";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: Connect to backend or email service (e.g., EmailJS, Formspree)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: portfolioConfig.email || "vivekprajapat808@gmail.com",
      href: portfolioConfig.email ? `mailto:${portfolioConfig.email}` : null,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: portfolioConfig.phone || "+91 8570979132",
      href: portfolioConfig.phone ? `tel:${portfolioConfig.phone}` : null,
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "GitHub Profile",
      href: portfolioConfig.github || null,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: portfolioConfig.linkedin || null,
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div
          ref={ref}
          className={`contact__grid reveal ${isVisible ? "visible" : ""}`}
        >
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-text">
              Feel free to reach out to me through any of the following channels.
              I'm always open to discussing new projects, opportunities, or
              collaborations.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="contact__info-item">
                    <div className="contact__info-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="contact__info-label">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact__info-value contact__info-value--link"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="contact__info-value">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form className="contact__form glass-card" onSubmit={handleSubmit}>
            {submitted && (
              <div className="contact__success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <div className="contact__field">
              <label htmlFor="name" className="contact__label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`contact__input ${errors.name ? "contact__input--error" : ""}`}
                placeholder="Shinchan"
              />
              {errors.name && (
                <span className="contact__error">{errors.name}</span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="email" className="contact__label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`contact__input ${errors.email ? "contact__input--error" : ""}`}
                placeholder="Shinchan@nohara.com"
              />
              {errors.email && (
                <span className="contact__error">{errors.email}</span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`contact__input contact__textarea ${errors.message ? "contact__input--error" : ""}`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <span className="contact__error">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              <FiSend size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
