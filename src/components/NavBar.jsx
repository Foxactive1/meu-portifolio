import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Portifolio</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#sobre">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#certificados">Certifications</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#footer">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
