export default function Header() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">Full Stack Developer</p>
          <h1>Ritish Bhardwaj</h1>

          <nav aria-label="Main navigation" className="hero-nav hero-nav-under-name">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <p className="subtitle">
            Backend-focused engineer building resilient automation workflows, ETL pipelines, and
            telecom-grade integrations.
          </p>

          <div className="contact-links" aria-label="Contact links">
            <a href="tel:+919914996125">+91-9914996125</a>
            <a href="mailto:ritishbhardwaj02@gmail.com">ritishbhardwaj02@gmail.com</a>
            <a href="https://linkedin.com/in/ritish-bhardwaj" target="_blank" rel="noreferrer">
              linkedin.com/in/ritish-bhardwaj
            </a>
            <a href="https://github.com/ritishbhardwaj" target="_blank" rel="noreferrer">
              github.com/ritishbhardwaj
            </a>
          </div>
        </div>

        <div className="hero-image-wrap" aria-label="Profile image placeholder">
          <img
            className="hero-image"
            src="/profile.jpg"
            alt="Ritish Bhardwaj"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.setAttribute('data-fallback', 'Photo');
            }}
          />
          <span className="hover-name">Ritish Bhardwaj</span>
        </div>
      </div>
    </header>
  );
}
