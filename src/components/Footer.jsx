import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './css/Footer.module.css';  // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <h4>Diksha Enterprises</h4>
            <p>Your trusted partner for coating services.</p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.footerText}>
              <p>&copy; {new Date().getFullYear()} Diksha Enterprises. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
