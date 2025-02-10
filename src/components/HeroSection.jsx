"use client"; // Required for React Hooks in Next.js App Router

import { useEffect, useState } from "react";

const HeroSection = () => {
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
    <section className="relative py-4 w-full h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/Home.jpg')" }}></div>

      {/* Content */}
      <div className=" justify-center h-full  max-w-[1550px] mx-auto ">
      <div className="relative z-10 flex  flex-col items-start justify-center h-full px-10 text-[#ECE4D9]">
        <h1 className="text-[68px] font-extrabold leading-tight">
        We Build Websites,<br />
         Apps And Strategies <br />
         to Grow Your Business. 
        </h1>
        <p className="mt-4 text-[20px] max-w-4xl">
        NexaVista Technologies is your partner in turning complex ideas into intuitive digital solutions that resonate with your audience.
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-[16px] font-medium transition-all">
          Get In Touch →
        </button>
      </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1A1816]  py-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#ECE4D9]">
          {/* Counter Boxes */}
          <div>
            <span className="text-[54px] font-black">{experience}+</span>
            <p className="text-gray-400 text-[18px] font-normal ">Years Of Experience</p>
          </div>
          <div>
            <span className="text-[54px] font-black">{projects}+</span>
            <p className="text-gray-400 text-[18px] font-normal" >Projects Completed</p>
          </div>
          <div>
            <span className="text-[54px] font-black">{developers}+</span>
            <p className="text-gray-400 text-[18px] font-normal" >Skilled Developers</p>
          </div>
          <div>
            <span className="text-[54px] font-black">{clients}+</span>
            <p className="text-gray-400 text-[18px] font-normal">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
