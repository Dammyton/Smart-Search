import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";
import logo from "../../assets/sr.svg";

const NavbarComponent = () => {
  return (
    <>
      <Navbar className={styles.warning} expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} className={styles.search} alt="logo" />
            <span className={styles.title}>SmartSearch</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
