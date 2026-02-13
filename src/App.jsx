import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A short one-liner about what this project solves and the technologies used.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Project Two',
    description: 'Another featured project with your impact, key features, and results.',
    stack: ['TypeScript', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Project Three',
    description: 'A creative project that demonstrates your UI/UX and frontend craftsmanship.',
    stack: ['React', 'Vite', 'CSS'],
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <Section id="about" title="About Me">
          <p>
            Hi, I&apos;m <strong>Your Name</strong>. I&apos;m a frontend-focused developer passionate
            about building fast, accessible, and delightful web experiences.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="pill-list">
            {['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'REST APIs', 'Git'].map(
              (skill) => (
                <li key={skill}>{skill}</li>
              )
            )}
          </ul>
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Interested in collaborating? Reach out at{' '}
            <a href="mailto:youremail@example.com">youremail@example.com</a>.
          </p>
        </Section>
      </main>
    </div>
  );
}
