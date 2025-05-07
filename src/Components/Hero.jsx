
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg')" }}>
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight mb-4 opacity-0 animate-fadeIn">Hi, I’m [Your Name]</h1>
          <p className="text-lg opacity-0 animate-fadeIn delay-200 mb-6">I am a passionate developer who loves coding and creating impactful digital experiences.</p>
          <a href="#contact" className="inline-block py-2 px-6 bg-[#259CA8] text-white text-lg font-semibold rounded-full hover:bg-[#135783] transition duration-300 opacity-0 animate-fadeIn delay-400">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
