import img from '../assets/aboutme.jpg';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
      {/* Left Section */}
      <div
        className="md:w-1/2 w-full mb-12 md:mb-0 animate-[fade-slide-left_1s_ease-out_forwards]"
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="text-7xl font-bold text-[#259CA8] mb-6">about.</h2>
        <p className="text-xl leading-8">
          I'm <span className="text-[#259CA8] font-semibold">Dipratna Mahire</span>, a passionate Java Fullstack Developer with solid experience in building modern, scalable web applications.
          <br /><br />
          <span className="text-[#259CA8] font-bold"> Education:</span><br />
          Bachelor’s in Computer Application from <span className="text-[#259CA8]">Systel IMR, Dhule</span>.
          <br /><br />
          <span className="text-[#259CA8] font-bold"> Experience:</span><br />
          Worked on real-world projects like Contact Manager App, Bank ATM Simulator, and Dynamic Admission Pages for ICEM using full-stack technologies.
          <br /><br />
          <span className="text-[#259CA8] font-bold">Skillset:</span><br />
          ▸ Java, Spring Boot, REST APIs<br />
          ▸ ReactJS<br />
          ▸ MySQL<br />
          ▸ Tailwind CSS, Bootstrap<br />
          ▸ GitHub, Postman, VSCode<br /><br />
          I specialize in building clean UI and writing robust backend logic to solve real-world problems efficiently. Always eager to learn and stay updated with tech trends.
        </p>
      </div>

      {/* Right Section - Image */}
      <div
        className="md:w-1/2 w-full flex justify-center animate-[fade-slide-right_1s_ease-out_forwards]"
        style={{ animationDelay: '0.2s' }}
      >
        <img
          src={img}
          alt="Dipratna Mahire - Fullstack Developer"
          className="w-[22rem] h-[22rem] rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-slide-left {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-slide-right {
          0% { transform: translateX(30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default About;
