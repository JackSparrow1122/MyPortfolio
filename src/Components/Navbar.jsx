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
    <nav className="bg-black text-white sticky top-0 z-50 px-6 md:px-16 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold">
          <Link
            to="/"
            className="hover:text-[#259CA8] transition-all duration-300"
          >
            <img src={logo} alt="Logo" className="h-15 md:h-12" /> {/* Adjust logo size */}
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", ref: welcomeRef },
            { name: "About", ref: aboutRef },
            { name: "Tech Stack", ref: techRef },
            { name: "Projects", ref: projectsRef },
            { name: "Contact", ref: contactRef },
          ].map(({ name, ref }) => (
            <button
              key={name}
              onClick={() => scrollToSection(ref)}
              className="hover:text-[#259CA8] transition-all duration-300 text-xl"
            >
              {name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-3xl">☰</button> {/* Mobile menu toggle icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
