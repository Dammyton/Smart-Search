import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";
import social from "../../assets/social.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import medium from "../../assets/medium.svg";

let socialIcons = [
  {
    icon: facebook,
    link: "https://web.facebook.com/dammyton/",
  },
  {
    icon: twitter,
    link: "https://twitter.com/Dammyton16",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/damilola-owolabi-7821b714a/",
  },
  {
    icon: github,
    link: "https://github.com/Dammyton",
  },
  {
    icon: medium,
    link: "https://medium.com/@1532006452059",
  },
];
const Footer = () => {
  return (
    <>
      <div className={`${styles.footer} pt-5 pb-5`}>
        <Container className=" text-center">
          <img
            src={social}
            className={`${styles.icon} mb-5`}
            alt="socialIcon"
          />
          <h3 className="mb-5">SOCIAL</h3>
          {socialIcons?.map((item, index) => {
            return (
              <a href={item.link} target="_blank" rel="noreferrer" key={index}>
                <img
                  src={item.icon}
                  className={`${styles.icons} p-2 m-2`}
                  alt="socialIcon"
                />
              </a>
            );
          })}
        </Container>
      </div>
    </>
  );
};

export default Footer;
