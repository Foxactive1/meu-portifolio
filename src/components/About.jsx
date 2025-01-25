import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const toggleAbout = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  return (
    <div className="about-container">
      <button className="about-btn" onClick={toggleAbout}>
        SOBRE MIM
      </button>
      {isAboutVisible && (
        <div className="about-text">
          <p>
            Sou um profissional apaixonado por tecnologia com vasta experiência em desenvolvimento
            web e programação. Meu objetivo é criar soluções inovadoras que transformem ideias em
            realidade, utilizando ferramentas como React, Python, SQL e muito mais. Acredito no
            aprendizado contínuo e na importância de unir criatividade e funcionalidade.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
