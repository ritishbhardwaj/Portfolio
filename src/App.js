import React from 'https://esm.sh/react@18.3.1';
import Header from './components/Header.js';
import Section from './components/Section.js';
import ProjectCard from './components/ProjectCard.js';

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
    stack: ['React', 'CSS', 'Accessibility'],
  },
];

const skills = ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'REST APIs', 'Git'];

const e = React.createElement;

export default function App() {
  return e('div', { className: 'app' }, [
    e(Header, { key: 'header' }),
    e('main', { className: 'container', key: 'main' }, [
      e(
        Section,
        { id: 'about', title: 'About Me', key: 'about' },
        e(
          'p',
          null,
          "Hi, I'm ",
          e('strong', null, 'Your Name'),
          '. I am a frontend-focused developer building fast, accessible, and delightful web experiences.'
        )
      ),
      e(
        Section,
        { id: 'skills', title: 'Skills', key: 'skills' },
        e(
          'ul',
          { className: 'pill-list' },
          skills.map((skill) => e('li', { key: skill }, skill))
        )
      ),
      e(
        Section,
        { id: 'projects', title: 'Featured Projects', key: 'projects' },
        e(
          'div',
          { className: 'projects-grid' },
          projects.map((project) => e(ProjectCard, { key: project.title, project }))
        )
      ),
      e(
        Section,
        { id: 'contact', title: 'Contact', key: 'contact' },
        e(
          'p',
          null,
          'Interested in collaborating? Reach out at ',
          e('a', { href: 'mailto:youremail@example.com' }, 'youremail@example.com'),
          '.'
        )
      ),
    ]),
  ]);
}
