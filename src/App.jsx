import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Parallax from "./components/Parallax/Parallax";
import Techstack from "./components/techstack/Techstack";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";
import { useState, useEffect } from "react";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {load ? (
        <section>
          <Preloader />
        </section>
      ) : (
        <div>
          <section id="HomePage">
            <Navbar />
            <Hero />
          </section>
          <section id="About">
            <About />
          </section>
          <section id="TechStack">
            <Parallax type="TechStack" />
          </section>
          <section>
            <Techstack />
          </section>
          <section id="Project">
            <Parallax type="Project" />
          </section>
          <Project />
          <section id="Contact">
            <Contact />
          </section>
          <footer>
            <p className="copyright">© Copyright 2024</p>
            <hr />
            <p>
              Designed & Built by <strong>Akash Mathur</strong>
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
