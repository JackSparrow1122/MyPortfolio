import React from 'react';

const blogs = [
  {
    title: 'Understanding React Rendering',
    link: 'https://medium.com/@yourusername/react-rendering-explained',
  },
  {
    title: 'REST API Best Practices in Spring Boot',
    link: 'https://hashnode.com/@yourusername/springboot-api-best-practices',
  },
];

const TechBlogs = () => {
  return (
    <section className="py-16 px-6 bg-[#1a1a1a]" id="blogs">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-[#ffc700] mb-8">Tech Blogs</h2>
        <ul className="space-y-6">
          {blogs.map((blog, index) => (
            <li
              key={index}
              className="hover:bg-[#259CA8] p-4 rounded-lg transition-all duration-300 shadow-lg"
            >
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-[#1c7e8d] font-semibold underline"
              >
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechBlogs;
