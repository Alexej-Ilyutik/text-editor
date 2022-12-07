import React from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="header__navbar">
        <Container>
          <Navbar.Brand className="font-weight-bold navbar__logo" href="/">
            Note text editor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar__item">
            <Nav className="me-auto navbar__link-container">
              <Nav.Link className="navbar__link" as={Link} to="/">
                Note editor
              </Nav.Link>
              <Nav.Link className="navbar__link" as={Link} to="/about-me">
                About me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
