import React, { useState } from "react";
import "./Certifications.css";

function Certifications() {
  const [activeIndex, setActiveIndex] = useState(null);

  const certifications = [
    {
      title: "Google: Inteligência Artificial e Produtividade",
      description: "Curso oferecido pela Santander Open Academy em 2024, com 8 horas de duração e 12 módulos, cobrindo temas de produtividade e inteligência artificial.",
    },
    {
      title: "Curso Técnico em Processamento de Dados",
      description: "Curso concluído em 1999 na Escola Estadual Clóvis Salgado, abordando fundamentos de informática e desenvolvimento de sistemas.",
    },
    {
      title: "Microsoft Office Completo",
      description: "Curso com foco em Word, Excel, PowerPoint e Access, incluindo fundamentos de Windows 2000.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="certifications">
      <h2>Certificações</h2>
      <div className="certifications-container">
        {certifications.map((certification, index) => (
          <div key={index} className="certification-item">
            <button
              className="certification-title"
              onClick={() => handleToggle(index)}
            >
              {certification.title}
            </button>
            {activeIndex === index && (
              <div className="certification-description">
                <p>{certification.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;;
