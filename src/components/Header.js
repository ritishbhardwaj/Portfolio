import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

export default function Header() {
  return e('header', { className: 'hero' },
    e('div', { className: 'container hero-content' }, [
      e('p', { className: 'eyebrow', key: 'eyebrow' }, 'Frontend Developer'),
      e('h1', { key: 'title' }, 'Your Name'),
      e(
        'p',
        { className: 'subtitle', key: 'subtitle' },
        'I craft responsive and user-focused web interfaces using React and modern frontend tools.'
      ),
      e('nav', { 'aria-label': 'Main navigation', className: 'hero-nav', key: 'nav' }, [
        e('a', { href: '#about', key: 'about' }, 'About'),
        e('a', { href: '#skills', key: 'skills' }, 'Skills'),
        e('a', { href: '#projects', key: 'projects' }, 'Projects'),
        e('a', { href: '#contact', key: 'contact' }, 'Contact'),
      ]),
    ])
  );
}
