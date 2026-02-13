export default function Header() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <p className="eyebrow">Frontend Developer</p>
        <h1>Your Name</h1>
        <p className="subtitle">
          I craft responsive and user-focused web interfaces using React and modern frontend tools.
        </p>
        <nav aria-label="Main navigation" className="hero-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
