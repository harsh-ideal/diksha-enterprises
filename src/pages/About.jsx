import React from "react";
import styles from "./About.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className={styles.aboutContainer} fluid>
      <Row className="justify-content-center my-4">
        <Col md={8}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <h2 className={styles.title}>About Diksha Enterprises</h2>
              <p className={styles.description}>
                Welcome to Diksha Enterprises! We specialize in high-quality
                powder coating and phosphating services designed to meet your
                industrial needs. With years of experience in the field, we are
                committed to delivering exceptional service, ensuring durability
                and aesthetic appeal for your products.
              </p>
              <p className={styles.description}>
                Our state-of-the-art facilities and skilled team ensure precision
                and efficiency in every project we undertake. From small batches
                to large-scale orders, Diksha Enterprises is equipped to handle
                it all with professionalism and care.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <h3 className={styles.subtitle}>Why Choose Us?</h3>
              <ul className={styles.list}>
                <li>Advanced technology for precise coating solutions</li>
                <li>Eco-friendly processes</li>
                <li>Experienced and dedicated team</li>
                <li>Affordable and competitive pricing</li>
              </ul>
              <p className={styles.description}>
                At Diksha Enterprises, customer satisfaction is our top priority.
                We strive to build lasting relationships with our clients by
                delivering consistent and reliable services.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
