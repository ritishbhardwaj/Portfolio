import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

export default function ProjectCard({ project }) {
  return e('article', { className: 'project-card' }, [
    e('h3', { key: 'title' }, project.title),
    e('p', { key: 'description' }, project.description),
    e(
      'ul',
      { className: 'pill-list', key: 'stack' },
      project.stack.map((tech) => e('li', { key: tech }, tech))
    ),
  ]);
}
