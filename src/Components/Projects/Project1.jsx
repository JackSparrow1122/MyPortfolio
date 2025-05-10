import React from 'react';
import education from '../../assets/education.avif';
import notapp from '../../assets/noteapp.avif';
import  weatherapp from '../../assets/wetherapp.avif';
import techlumia from '../../assets/techlumina.avif';

const projects = [
  {
    name: 'education website',
    image: education,  
    description:
      'A responsive and modern educational website built for showcasing academic programs, testimonials, and achievements.',
    tech: ['React.js,Tailwind CSS, React Router, AOS (Animate on Scroll), GSAP React Icons'],
    github: 'https://github.com/JackSparrow1122/Educational-Website.git',
    demo: 'https://brighty-nerd.vercel.app/',
  },
  {
    name: 'weather app',
    image: weatherapp,
    description:
      'A sleek and responsive weather application that fetches real-time weather data based on user input..',
    tech: ['React.js, Tailwind CSS, OpenWeatherMap API,Axios'],
    github: 'https://github.com/JackSparrow1122/Weather-APP.git',
    demo: 'https://github.com/JackSparrow1122/Weather-APP.git',
  },
  {
    name: 'Note Application',
    image: notapp,
    description:
      'A simple and efficient note-taking app where users can add, delete, and manage personal notes in real time..',
    tech: ['React.js, Tailwind CSS, Local Storage (for persisting notes)'],
    github: 'https://github.com/JackSparrow1122/Notes-Application.git',
    demo: 'https://notes-web-app-tau.vercel.app/',
  },
  {
    name: 'techlumia',
    image: techlumia,
    description:
      'A modern, responsive website designed to showcase technology-related content and services with a sleek UI.',
    tech: ['React.js, Tailwind CSS, React Router DOM, AOS (Animate On Scroll) Library'],
    github: 'https://github.com/JackSparrow1122/Tech-Site.git',
    demo: 'https://tech-site-p-r.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-black text-white py-4 px-4 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#259CA8] mb-6 sm:mb-10 sm:text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-xl shadow-lg p-6">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#259CA8] mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm text-gray-400 mb-2">
              <span className="font-semibold text-white">Technologies:</span>{' '}
              {project.tech.join(', ')}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#259CA8] text-black px-4 py-2 rounded hover:bg-[#1fc1d6]"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#259CA8] text-[#259CA8] px-4 py-2 rounded hover:bg-[#259CA8] hover:text-black"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
