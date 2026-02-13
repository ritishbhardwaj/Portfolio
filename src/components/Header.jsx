export default function Header() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">Software Developer</p>
          <h1>Ritish Bhardwaj</h1>
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

          <nav aria-label="Main navigation" className="hero-nav">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="hero-image-wrap" aria-label="Profile image">
          <img
            className="hero-image"
            src="/profile.jpg"
            alt="Ritish Bhardwaj"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.setAttribute('data-fallback', 'RB');
            }}
          />
        </div>
      </div>
    </header>
  );
}
