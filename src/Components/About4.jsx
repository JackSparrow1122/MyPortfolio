import React from "react";
import img from '../assets/certficate.avif';

const About4 = () => {
  return (
    <div className="w-full bg-black py-4 px-4 sm:px-8 md:px-16" id="certificate">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#259CA8] mb-6">
            Certificate
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
            I have successfully completed a comprehensive <strong>Java Full Stack Development</strong> course. 
            The training covered:
          </p>
          <ul className="list-disc list-inside text-white mt-4 space-y-2 text-left">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React, Tailwind CSS</li>
            <li><strong>Backend:</strong> Core Java, Advanced Java (JDBC, JSP, MVC), Hibernate</li>
            <li><strong>Frameworks:</strong> Spring, Spring Boot</li>
            <li><strong>Database:</strong> MySQL, SQL</li>
            <li>Worked on real-time <strong>projects</strong> using MVC architecture</li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="w-full flex justify-center md:justify-end">
          <img
            src={img}
            alt="Java Full Stack Certificate"
            className="rounded-xl shadow-lg w-11/12 sm:w-3/4 md:w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About4;
