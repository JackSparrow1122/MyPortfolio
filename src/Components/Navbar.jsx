import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/large.png"; // Import your logo here

const Navbar = ({ welcomeRef, aboutRef, techRef, contactRef, projectsRef }) => {
  // Scroll to the section on link click
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="bg-black text-white  sticky top-0 z-50 px-16">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className=" font-bold">
          <Link
            to="/"
            className="hover:text-[#259CA8] transition-all duration-300"
          >
            <img src={logo} alt="Logo" className="h-25" /> {/* Use your logo here */}
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="space-x-6">
          <button
            onClick={() => scrollToSection(welcomeRef)}
            className="hover:text-[#259CA8] transition-all duration-300 text-xl"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-[#259CA8] transition-all duration-300 text-xl"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(techRef)}
            className="hover:text-[#259CA8] transition-all duration-300 text-xl"
          >
            Tech Stack
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="hover:text-[#259CA8] transition-all duration-300 text-xl"
          >
            Projects
          </button>
         
          <button
            onClick={() => scrollToSection(contactRef)}
            className="hover:text-[#259CA8] transition-all duration-300 text-xl"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
