import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./HowItWorks.module.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const HowItWorks = () => {
  return (
    <>
      <div id="steps">
        <div className={`${styles.steps} mt-5 mb-5`}>
          <div className="text-center mb-5">
            <h3>How It Works</h3>
            <hr className={styles.border} />
          </div>
          <Container>
            <Row>
              <Col md="4">
                <div className="card py-4 px-4 text-center shadow mb-3">
                  <div className="image_layer mb-4 mt-2">
                    <img src={img1} className={styles.icon} alt="icon" />
                  </div>
                  <h4>STEP 1</h4>
                  <p>
                    Click on the input field for "Select Country". It will
                    automatically populate the list of all countries. Feel free
                    to select any country.
                  </p>
                </div>
              </Col>

              <Col md="4">
              <div className="card py-4 px-4 text-center shadow mb-3">
                  <div className="image_layer mb-4 mt-2">
                    <img
                      src={img2}
                      className={`${styles.iconTwo} ${styles.icon}`}
                      alt="icon"
                    />
                  </div>
                  <h4>STEP 2</h4>
                  <p>
                    Click on the input field for "Select State".This will
                    populate the respective states of the country you selected
                    earlier. Select your favourite state.
                  </p>
                </div>
              </Col>
              <Col md="4">
              <div className="card py-4 px-4 text-center shadow mb-3">
                  <div className="image_layer mb-4 mt-2">
                    <img
                      src={img3}
                      className={`${styles.icon} pt-0`}
                      alt="icon"
                    />
                  </div>
                  <h4>STEP 3</h4>
                  <p>
                    Click on the input field for "Select City". Here you'll have
                    the list of cities in a particular state. populate the list
                    of all countries.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
