import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
