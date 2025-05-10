import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import contactImg from '../assets/support.jpg'; // Replace with your image path

const ContactForm = () => {
  return (
    <section className="bg-black py-12 px-6 md:px-16" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Social Icons */}
        <div className="flex md:flex-col gap-6 text-white text-5xl md:text-6xl">
          <a
            href="https://www.instagram.com/_jack_sparrow_1122/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#259CA8] transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/JackSparrow1122"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#259CA8] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/deepmahire1122/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#259CA8] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
  href="https://wa.me/9146268421" // Replace with your WhatsApp number (with country code)
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#259CA8] transition-colors duration-300"
  aria-label="WhatsApp"
>
  <FaWhatsapp />
</a>

        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl md:text-7xl font-bold text-[#259CA8] mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#259CA8] transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email ID</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#259CA8] transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="I would love to connect with you..."
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#259CA8] transition-all duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#259CA8] text-white px-6 py-3 rounded hover:bg-[#1c7e8d] transition-all duration-300"
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
            className="w-full max-w-md rounded shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
