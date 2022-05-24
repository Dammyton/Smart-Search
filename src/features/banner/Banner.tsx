import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./Banner.module.css";
import banner from "../../assets/bg.png";

const Banner = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col md="5" className={styles.box1}>
          <div>
            <h3 className={`${styles.title} pt-3`}>
              An Amazing Country Directory App
            </h3>
            <p className={styles.text}>
              Just a click away you get to see the list of all countries, their
              states and cities. Interesting right?
            </p>
            <a className={`btn-rounded ${styles.get_started}`} href="#steps">
              Get Started
            </a>
          </div>
        </Col>
        <Col md="7" className={styles.box2}>
          <img src={banner} className="img-fluid" alt={"banner"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
