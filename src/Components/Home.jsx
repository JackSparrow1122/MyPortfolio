import React, { useRef } from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Tech from "./Tech";
import Contact from "./Contact";
import Projects from "./Projects/Project1";
// import TechBlogs from './Techblock'

const Home = () => {
  // Create refs for each section
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <Navbar
        welcomeRef={welcomeRef}
        aboutRef={aboutRef}
        techRef={techRef}
        contactRef={contactRef}
        projectsRef={projectsRef}
      />
      <div ref={welcomeRef}>
        <Welcome />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={techRef}>
        <Tech />
      </div>
      {/* <TechBlogs/> */}
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
