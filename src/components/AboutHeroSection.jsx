"use client";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaTasks, FaUsers, FaSmile } from 'react-icons/fa';

const AboutHeroSection = () => {
  // Counter Animation
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [developers, setDevelopers] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExperience((prev) => (prev < 10 ? prev + 1 : prev));
      setProjects((prev) => (prev < 500 ? prev + 10 : prev));
      setDevelopers((prev) => (prev < 100 ? prev + 5 : prev));
      setClients((prev) => (prev < 500 ? prev + 10 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-4 w-full h-[960px] bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/Aboutherosection.jpg')" }}></div>

      {/* Content */}
      <div className="justify-center h-full max-w-[1550px] mx-auto">
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-[#ECE4D9]">
          <h1 className="text-[68px] font-extrabold leading-tight">
          Our Journey, Mission<br />
            
          at NexaVista Technologies
          </h1>
          <p className="mt-4 text-[20px] max-w-4xl">
          NexaVista Technologies empowers businesses with innovative digital solutions. Our passionate team combines expertise and creativity to harness technology for meaningful growth and transformation.
          </p>

          {/* CTA Button */}
          <button className="mt-6 bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-[16px] font-medium transition-all">
            Get In Touch →
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1A1816] py-6">
        <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#ECE4D9]">
          {/* Counter Boxes with Group Hover */}
          {[
            { icon: FaRegCalendarAlt, value: experience, label: "Years Of Experience" },
            { icon: FaTasks, value: projects, label: "Projects Completed" },
            { icon: FaUsers, value: developers, label: "Skilled Developers" },
            { icon: FaSmile, value: clients, label: "Satisfied Clients" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center cursor-pointer transition-colors"
            >
              <stat.icon className="text-[#6B6159] group-hover:text-[#ECE4D9] mr-4 transition-colors" size={52} />
              <div>
                <span className="text-[54px] text-[#ECE4D9] group-hover:text-[#ECE4D9] font-black transition-colors">
                  {stat.value}+
                </span>
                <p className="text-[#ECE4D9] group-hover:text-[#ECE4D9] text-[18px] font-normal transition-colors">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;