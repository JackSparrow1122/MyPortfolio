import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/large.png";

const Navbar = ({ welcomeRef, aboutRef, techRef, contactRef, projectsRef }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const navLinks = [
    { name: "Home", ref: welcomeRef },
    { name: "About", ref: aboutRef },
    { name: "Tech Stack", ref: techRef },
    { name: "Projects", ref: projectsRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 px-6 md:px-16 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold">
          <Link to="/" className="hover:text-[#259CA8] transition-all duration-300">
            <img src={logo} alt="Logo" className="h-15" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, ref }) => (
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 bg-black">
          {navLinks.map(({ name, ref }) => (
            <button
              key={name}
              onClick={() => scrollToSection(ref)}
              className="block w-full text-left text-lg hover:text-[#259CA8] transition-all duration-300"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
