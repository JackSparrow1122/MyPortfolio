import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaJava,
  FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiSpring,
  SiSpringboot,
  SiJirasoftware,
  SiHibernate,
  SiJunit5,
  
} from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 color="#E44D26" />, name: "HTML" },
  { icon: <FaCss3Alt color="#264de4" />, name: "CSS" },
  { icon: <FaJs color="#f7df1e" />, name: "JavaScript" },
  { icon: <FaBootstrap color="#7911f6" />, name: "Bootstrap" },
  { icon: <FaReact color="#61DBFB" />, name: "React" },
  { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
  { icon: <FaJava color="#f89820" />, name: "Java" },
  { icon: <SiSpring color="#6DB33F" />, name: "Spring" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
  { icon: <SiMysql color="#00758F" />, name: "MySQL" },
  { icon: <SiHibernate color="#59666C" />, name: "Hibernate" },
  { icon: <FaDatabase color="#00758F" />, name: "JDBC" },

];

const Tech = () => {
  return (
    <div className="bg-black py-12 px-4 md:px-16 text-center">
      <h2 className="text-5xl font-bold text-[#259CA8] mb-4">My Tech Stack</h2>
      <p className="text-lg text-white mb-10">
        Technologies I've been working with currently
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-white justify-items-center">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-8xl mb-2">{tech.icon}</div>
            <p className="text-base font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
