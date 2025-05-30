import img from '../assets/aboutme.avif';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-8 md:px-16 pb-4">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 animate-[fade-slide-left_1s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#259CA8] mb-6 sm:text-center md:text-left">
            About
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            I'm <span className="text-[#259CA8] font-semibold text-xl md:text-2xl">Dipratna Mahire</span>, a passionate Java Fullstack Developer with solid experience in building modern, scalable web applications.
            <br /><br />
            <span className="text-[#259CA8] font-bold text-xl md:text-2xl">Education:</span><br />
            Bachelor’s in Computer Application from <span className="text-[#259CA8]">Systel IMR, Dhule</span>.
            <br /><br />
            <span className="text-[#259CA8] font-bold text-xl md:text-2xl">Experience:</span><br />
            Worked on real-world projects like Contact Manager App, Bank ATM Simulator, and Dynamic Admission Pages for ICEM using full-stack technologies.
            <br /><br />
            <span className="text-[#259CA8] font-bold text-xl md:text-2xl">Skillset:</span><br />
            <span className="font-semibold">Backend :</span> Java • Spring Boot • RESTful APIs • MySQL<br />
            <span className="font-semibold">Frontend :</span> ReactJS • Tailwind CSS • Bootstrap<br />
            <span className="font-semibold">Tools :</span> GitHub • Postman • VS Code
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center animate-[fade-slide-right_1s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <img
            src={img}
            alt="Dipratna Mahire - Fullstack Developer"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom Statement */}
      <p className="mt-12 text-base sm:text-lg md:text-xl text-[#259CA8] text-center max-w-4xl leading-relaxed animate-[fade-slide-up_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        I specialize in building clean UIs and writing robust backend logic to solve real-world problems efficiently. Always eager to learn and stay updated with tech trends.
      </p>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-slide-left {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-slide-right {
          0% { transform: translateX(30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-slide-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default About;
