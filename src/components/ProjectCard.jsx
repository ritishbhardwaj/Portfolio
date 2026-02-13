export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="pill-list">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
