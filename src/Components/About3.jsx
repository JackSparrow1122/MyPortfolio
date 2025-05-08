import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Tea drinking", level: 95, color: "bg-teal-300" },
  { name: "Web development", level: 90, color: "bg-rose-300" },
  { name: "Codding", level: 95, color: "bg-yellow-400" },
  { name: "Singing", level: 75, color: "bg-amber-300" },
  { name: "Gym", level: 40, color: "bg-red-400" },
];

const levels = ["Maja Aa Gaya", "Kya Bat he", "Accha He", "Thik He"];

const About3 = () => {
  const containerRef = useRef(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateBars(true);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => containerRef.current && observer.unobserve(containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="w-full px-6 sm:px-12 md:px-16 py-12 bg-black overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-[#259CA8]">My Skills</h2>

      <div className="flex justify-center mt-12 gap-4 sm:gap-6 md:gap-8">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between h-[360px] text-gray-400 text-sm mr-6 font-medium py-2">
          {levels.map((level, index) => (
            <div key={index} className="h-[90px] flex items-center">
              {level}
            </div>
          ))}
        </div>

        {/* Bars */}
        <div className="flex items-end h-[360px] space-x-6 sm:space-x-8 md:space-x-10">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center w-[80px] sm:w-[100px] md:w-[120px]">
              <div
                className={`w-full ${skill.color} rounded-t-xl relative transition-all duration-700 ease-out transform ${
                  animateBars ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
                }`}
                style={{
                  height: animateBars ? `${skill.level * 3.2}px` : `0px`,
                }}
              >
                {animateBars && (
                  <div className="absolute top-[-32px] left-1/2 transform -translate-x-1/2 text-white font-bold text-xl">
                    {skill.level}%
                  </div>
                )}
              </div>
              <p className="text-center mt-3 text-sm font-medium text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About3;
