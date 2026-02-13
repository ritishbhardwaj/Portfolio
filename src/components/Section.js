import React from 'https://esm.sh/react@18.3.1';

const e = React.createElement;

export default function Section({ id, title, children }) {
  return e('section', { id, className: 'section' }, [
    e('h2', { key: 'title' }, title),
    e('div', { key: 'content' }, children),
  ]);
}
