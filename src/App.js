import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Education from "./components/Education/Educ";
import Certif from "./components/Certifications/Certif";
import ScrollToTop from "./components/ScrollToTop";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".scroll-reveal", {
      distance: "20px",
      duration: 1000,
      delay: 200,
      origin: "right", // Change the origin to "right" for side animation
      interval: 100,
    });
  }, []);
  

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <Home />
                </Element>
                <Element name="education">
                  <Education />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="certifications">
                  <Certif />
                </Element>
                <Element name="resume">
                  <Resume />
                </Element>
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
