import { useEffect, useState } from 'react';
import img from '../assets/21004063.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import resume from '../assets/Resume.pdf';

const HomePage = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
<div className="relative w-full overflow-hidden bg-black min-h-[100vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen">

{/* Welcome animation */}
      {!showMainContent && (
        <div className="absolute inset-0 flex items-center justify-center text-7xl sm:text-7xl md:text-9xl font-bold text-white opacity-90 animate-[fade-in_0s_ease-out_forwards]">

          <h1>Welcome</h1>
        </div>
      )}

      {showMainContent && (
        <>
         {/* Social Media Icons */}
<div className="absolute left-2 top-2/3 md:top-1/2 -translate-y-1/2 flex flex-col space-y-4 text-white text-4xl z-10
  sm:left-4 sm:text-3xl sm:space-y-5
  md:left-6 md:text-4xl md:space-y-6
  lg:left-8 lg:text-5xl lg:space-y-6
">
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#259CA8] transition duration-300"
  >
    <i className="fab fa-instagram"></i>
  </a>
  <a
    href="https://github.com/JackSparrow1122"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#259CA8] transition duration-300"
  >
    <i className="fab fa-github"></i>
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#259CA8] transition duration-300"
  >
    <i className="fab fa-linkedin"></i>
  </a>
  <a
    href="https://wa.me/9146268421"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#259CA8] transition duration-300"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
</div>


          {/* Main Content */}
          <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-x-12 px-4 sm:px-16">
            {/* Text Content */}
            <div className="text-white max-w-xl  sm:text-xl animate-[fade-slide-up_1.5s_ease-out_forwards]">
              <h2 className="text-3xl sm:text-4xl">Hi,</h2>
              <h2 className="text-3xl sm:text-4xl">My name is</h2>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#259CA8] font-mono mt-2 animate-[pop-in_1.5s_ease-out_forwards]">
                Dipratna Mahire
              </h1>
              <p className="text-xl sm:text-lg mt-4">
                I am a passionate Java Full Stack Developer.
              </p>
              <p className="text-md sm:text-sm text-gray-300 mt-2">
                I specialize in building scalable backend services with Spring Boot and dynamic UIs using React.
              </p>

              {/* Buttons: Stacked in mobile, inline in larger screens */}
              <div className="mt-6 flex flex-row justify-center items-center gap-4 flex-wrap w-full">
              <a
                href={resume}
                download
                className="bg-[#259CA8] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#259CA8] transition duration-300 font-semibold"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-[#259CA8] text-[#259CA8] px-6 py-2 rounded-full hover:bg-[#259CA8] hover:text-white transition duration-300 font-semibold"
              >
                Hire Me
                </a>
              </div>

            </div>

            {/* Profile Image */}
            <img
              src={img}
              alt="Dipratna Mahire"
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover animate-[slide-right_1.5s_ease-out_forwards] shadow-lg shadow-[#259CA8]/50 sm:mt-0 mt-6"
            />
          </div>
        </>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slide-right {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes pop-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
