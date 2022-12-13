import React from 'react';
import Container from 'react-bootstrap/Container';

import './About.scss';

export function About() {
  return (
    <Container>
      <h2 className="main__title mb-5">About</h2>
      <ul className="about__list">
        This application uses the following technologies:
        <li className="about__item mt-4">Create React App</li>
        <li className="about__item">TypeScript</li>
        <li className="about__item">RTK Query</li>
        <li className="about__item">SCSS</li>
        <li className="about__item">Bootstrap</li>
        <li className="about__item">JSON Server</li>
        <li className="about__item">ReactRouterDOM</li>
        <li className="about__item">ESLint</li>
        <li className="about__item">Visual Studio Code</li>
      </ul>
    </Container>
  );
}
