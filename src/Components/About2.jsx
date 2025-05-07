import img from '../assets/buddha.jpg' // Replace with your image path

const About2 = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
      {/* Left Section - Image */}
      <div className="md:w-1/2 w-full flex justify-center animate-[fade-slide-left_1s_ease-out_forwards] mb-12 md:mb-0">
        <img
          src={img}
          alt="Dipratna Mahire"
          className="w-80 h-80 rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Right Section - Random Facts */}
      <div className="md:w-1/2 w-full animate-[fade-slide-right_1s_ease-out_forwards]">
        <h2 className="text-5xl font-bold text-[#259CA8] mb-6">Random Facts</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
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

export default About2;
