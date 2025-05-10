import React from "react";
import img from '../assets/certficate.avif'
const About4 = () => {
  return (
    <div className="w-full bg-black py-4 px-4 md:px-16" id="certificate">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl sm:text-5xl  font-bold sm:text-center sm:text-left mb-4 text-[#259CA8]">Certificate</h2>
          <p className="text-white text-lg leading-relaxed ">
            I have successfully completed a comprehensive <strong>Java Full Stack Development</strong> course. 
            The training covered:
          </p>
          <ul className="list-disc list-inside text-white mt-4 space-y-2">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React, Tailwind CSS</li>
            <li><strong>Backend:</strong> Core Java, Advanced Java (JDBC, JSP, MVC), Hibernate</li>
            <li><strong>Frameworks:</strong> Spring, Spring Boot</li>
            <li><strong>Database:</strong> MySQL, SQL</li>
            <li>Worked on real-time <strong>projects</strong> using MVC architecture</li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="w-full">
          <img
            src={img}
            alt="Java Full Stack Certificate"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About4;
