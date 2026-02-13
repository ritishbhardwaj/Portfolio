import Header from './components/Header';
import Section from './components/Section';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Amdocs (Client: Rogers - Telecom), Pune',
    period: 'Jul 2024 – Present',
    points: [
      'Developed and maintained backend automation workflows supporting telecom service provisioning and billing systems aligned with TMF standards.',
      'Built a Python-based ETL and automation framework for Test Data Management (TDM), dynamically extracting Oracle DB metadata and generating environment-specific configurations, reducing provisioning time by 40%.',
      'Implemented fault-tolerant data processing logic using structured JSON fallbacks, improving resilience of integration pipelines during database outages.',
      'Designed secure Bash + SSH automation utilities for cross-environment deployments, enabling passwordless authentication via RSA key configuration.',
      'Performed root cause analysis across distributed Linux systems by debugging Control-M batch jobs and application logs, resolving service validation failures in pre-release environments.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'KocharTech, Punjab',
    period: 'Jan 2024 – Jul 2024',
    points: [
      'Developed a desktop automation system using Python and Windows APIs, leveraging COM objects and win32 for low-level OS interaction.',
      'Built a Flask-based auto-update service integrated as a Windows background service.',
      'Designed a SQLite-backed caching layer and implemented multi-threaded exception handling for improved application reliability.',
    ],
  },
];

const projects = [
  {
    title: 'AI-GPT-BOT (RAG System)',
    stack: ['Python', 'LangChain', 'Ollama', 'ChromaDB'],
    description:
      'Designed a modular Retrieval-Augmented Generation backend with persistent vector storage for low-latency semantic retrieval and implemented context window management with SQLite-based chat history optimization.',
  },
  {
    title: 'Blog Management System',
    stack: ['Django', 'MySQL', 'JWT', 'REST APIs'],
    description:
      'Developed a full-stack application with JWT-based authentication, REST-style CRUD operations, relational data modeling, and optimized database queries for better performance.',
  },
];

const skills = {
  Languages: ['Python', 'C++', 'C', 'SQL', 'Bash'],
  Backend: ['FastAPI', 'Django', 'REST APIs'],
  Databases: ['MySQL', 'SQLite', 'Oracle (basic exposure)'],
  Tools: ['Linux (RHEL)', 'Git', 'Jenkins', 'Docker', 'Control-M'],
  'Core CS': ['Data Structures & Algorithms', 'OS', 'DBMS', 'OOP'],
};

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <Section id="about" title="About">
          <p>
            B.Tech in Computer Science graduate from Guru Nanak Dev University, Amritsar (2020 –
            2024) with a CGPA of 8.45/10. Strong interest in backend systems, automation, and
            reliable software delivery for enterprise-scale environments.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="experience-list">
            {experiences.map((experience) => (
              <article key={experience.role + experience.company} className="experience-card">
                <h3>{experience.role}</h3>
                <p className="meta">
                  {experience.company} • {experience.period}
                </p>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="pill-list">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="skills-grid">
            {Object.entries(skills).map(([category, values]) => (
              <div key={category}>
                <h3>{category}</h3>
                <ul className="pill-list">
                  {values.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="achievement">Achievement: Solved 400+ LeetCode problems (Contest Rank: 1642).</p>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Reach out at <a href="mailto:ritishbhardwaj02@gmail.com">ritishbhardwaj02@gmail.com</a>{' '}
            or connect on{' '}
            <a href="https://linkedin.com/in/ritish-bhardwaj" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </Section>
      </main>
    </div>
  );
}
