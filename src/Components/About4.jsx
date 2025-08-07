import React from "react";
import img from '../assets/certficate.avif'
import internshipImg from '../assets/certficate.jpg' // Add your internship certificate image here

const About4 = () => {
  return (
    <div className="w-full bg-black py-4 px-4 md:px-16" id="certificate">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold sm:text-center sm:text-left mb-4 text-[#259CA8]">Full Stack Certificate</h2>
          <p className="text-white ml-2 text-lg leading-relaxed ">
            I have successfully completed a comprehensive <strong>Java Full Stack Development</strong> course. 
            The training covered:
          </p>
          <ul className="list-disc list-outside text-white sm:text-xl ml-2 mt-4 space-y-2">
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

      {/* Internship Certificate Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
        {/* Left Side - Image */}
        <div className="w-full">
          <img
            src={internshipImg}
            alt="Internship Certificate"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        {/* Right Side - Text */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold sm:text-center sm:text-left mb-4 text-[#259CA8]">Internship Certificate</h2>
          <p className="list-disc list-outside text-white sm:text-xl ml-2 mt-4 space-y-2">
        I have completed an internship at <strong>GRYPHON ACADEMY</strong>,
        where I gained hands-on experience in full-stack software development.
        During this period, I actively contributed to real-world projects
        including the development of the company’s internal CRM and dynamic
        landing pages for <strong>INDIRA University</strong>. This opportunity
        enhanced my skills in <strong>React.js</strong>, <strong>Firebase</strong>, and
        collaborative team-based development.
      </p>
          {/* Add more details about your internship if you want */}
        </div>
      </div>
    </div>
  );
};

export default About4;
