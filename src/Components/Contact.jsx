import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import contactImg from '../assets/support.jpg'; // Replace with your image path

const ContactForm = () => {
  return (
    <section className="bg-black py-12 px-6 md:px-16" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Social Icons */}
        <div className="flex md:flex-col gap-6 text-white text-5xl ">
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-[#259CA8]">
            <FaInstagram />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-[#259CA8]">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-[#259CA8]">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-[#259CA8]">
            <FaEnvelope />
          </a>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold text-[#259CA8] mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-white mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#259CA8]"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Email ID</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#259CA8]"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="I would love to connect with you..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#259CA8]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#259CA8] text-white px-6 py-2 rounded hover:bg-[#1c7e8d] transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="w-full max-w-md rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
