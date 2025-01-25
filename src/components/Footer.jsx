import React from "react";
import "./Footer.css"; // Certifique-se de criar um arquivo CSS para estilizar o footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 InNovaIdeia. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/innovaideia2023"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i> {/* Ícone do LinkedIn */}
          </a>
          <a
            href="https://github.com/Foxactive1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i> {/* Ícone do GitHub */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;;
