import img from '../assets/buddha.avif'; // Replace with your image path

const About2 = () => {
  return (
    <div className="w-full  sm:min-h-[200px] md:min-h-[600px] lg:min-h-[500px] bg-black text-white flex flex-col sm:flex-row items-center px-4 sm:px-12 md:px-16 py-2 sm:py-4 pb-6 sm:pb-0 gap-10">


      {/* Left Section - Image (Mobile first) */}
      <div className="w-full sm:w-1/2 flex justify-center sm:mb-0 opacity-0 animate-fadeInLeft animation-delay-200">
        <img
          src={img}
          alt="Dipratna Mahire"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl object-cover shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-[#259CA8]/50"
          loading="lazy"
        />
      </div>

      {/* Right Section - Heading and Random Facts */}
      <div className="w-full sm:w-1/2 opacity-0 animate-fadeInRight animation-delay-300">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-[#259CA8] mb-6 sm:text-center sm:text-left">Random Facts</h2>

        {/* Facts List */}
        <ul className="list-disc list-outside ml-2 space-y-3 text-xl text-gray-300 sm:text-left">
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
