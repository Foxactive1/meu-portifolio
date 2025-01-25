import React from "react";
import { FaReact, FaPython, FaJsSquare, FaDatabase } from "react-icons/fa"; // Importando ícones

const Skills = () => {
  return (
    <section id="skills" className="skills container">
      <h2>Habilidades</h2>
      <ul>
        <li>
          <FaReact /> React
        </li>
        <li>
          <FaPython /> Python
        </li>
        <li>
          <FaJsSquare /> JavaScript
        </li>
        <li>
          <FaDatabase /> SQL
        </li>
      </ul>
    </section>
  );
};

export default Skills;;
