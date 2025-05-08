import img from '../assets/buddha.jpg'; // Replace with your image path

const About2 = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 py-16 gap-10">
      {/* Left Section - Image */}
      <div className="md:w-1/2 w-full flex justify-center opacity-0 animate-fadeInLeft animation-delay-200">
        <img
          src={img}
          alt="Dipratna Mahire"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl object-cover shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-[#259CA8]/50"
          loading="lazy"
        />
      </div>

      {/* Right Section - Random Facts */}
      <div className="md:w-1/2 w-full opacity-0 animate-fadeInRight animation-delay-300">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#259CA8] mb-6">Random Facts</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
          <li>I drink a lot of tea</li>
          <li>I'm passionate about web development.</li>
          <li>Playing video games</li>
          <li>I love playing Harmonium and Guitar</li>
          <li>I'm slightly addicted to Instagram</li>
          <li>Buddha is my mentor</li>
        </ul>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default About2;
