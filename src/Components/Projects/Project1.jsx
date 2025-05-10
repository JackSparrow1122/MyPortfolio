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
      'A full-stack web app to manage employee records with CRUD operations, pagination, and search functionality.',
    tech: ['Spring Boot', 'React', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/JackSparrow1122/Educational-Website.git',
    demo: 'https://brighty-nerd.vercel.app/',
  },
  {
    name: 'weather app',
    image: weatherapp,
    description:
      'A scalable e-commerce platform with product listing, cart, order management, and admin dashboard.',
    tech: ['Java', 'Spring Boot', 'Angular', 'MongoDB'],
    github: 'https://github.com/JackSparrow1122/Weather-APP.git',
    demo: 'https://github.com/JackSparrow1122/Weather-APP.git',
  },
  {
    name: 'Note Application',
    image: notapp,
    description:
      'Secure blogging app with JWT authentication, create/edit/delete posts, and comment features.',
    tech: ['Spring Boot', 'React', 'JWT', 'MongoDB'],
    github: 'https://github.com/JackSparrow1122/Notes-Application.git',
    demo: 'https://notes-web-app-tau.vercel.app/',
  },
  {
    name: 'techlumia',
    image: techlumia,
    description:
      'A personal portfolio website showcasing skills, projects, and contact form with responsive design.',
    tech: ['React', 'Tailwind CSS', 'EmailJS'],
    github: 'https://github.com/JackSparrow1122/Tech-Site.git',
    demo: 'https://tech-site-p-r.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-black text-white py-4 px-8 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#259CA8] mb-12 text-center">Projects</h2>
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
