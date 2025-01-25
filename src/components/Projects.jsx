import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "InNovaIdeia Website",
      description: "Website institucional criado para apresentar os serviços da InNovaIdeia, com design responsivo e foco em UX/UI.",
      github: "https://github.com/Foxactive1/InNovaIdeiaWebsite",
    },
    {
      title: "E-commerce com React",
      description: "Plataforma de e-commerce desenvolvida com React e integração de APIs para gerenciamento de produtos e pagamentos.",
      github: "https://github.com/Foxactive1/EcommerceReact",
    },
    {
      title: "Dashboard de Vendas",
      description: "Dashboard interativo criado com Python e Flask para visualização de dados de vendas e análise de performance.",
      github: "https://github.com/Foxactive1/SalesDashboard",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <button
              className="project-title"
              onClick={() => handleToggle(index)}
            >
              {project.title}
            </button>
            {activeIndex === index && (
              <div className="project-description">
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Acesse o GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
