import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './css/Navbar.module.css';

const DikshaNavbar = () => {
  return (
    <Navbar variant="light" expand="lg" className={styles.customNavbar}>
      
        <Navbar.Brand as={Link} to="/">Diksha Enterprises</Navbar.Brand>
        <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        className={styles.customNavbarToggle} 
      />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <NavDropdown title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/powder-coating">Powder Coating</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/phosphating">Phosphating</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default DikshaNavbar;
