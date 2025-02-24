"use client";

import { useEffect, useState, useRef } from "react";
import { FaRegCalendarAlt, FaTasks, FaUsers, FaSmile } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const HeroSection = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [developers, setDevelopers] = useState(0);
  const [clients, setClients] = useState(0);

  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
        },
      }
    );

    const interval = setInterval(() => {
      setExperience((prev) => (prev < 10 ? prev + 1 : prev));
      setProjects((prev) => (prev < 500 ? prev + 10 : prev));
      setDevelopers((prev) => (prev < 100 ? prev + 5 : prev));
      setClients((prev) => (prev < 500 ? prev + 10 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative py-4 w-full h-[960px] bg-black ${poppins.className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/Home.jpg')" }}
      ></div>

      {/* Content */}
      <div className="justify-center h-full max-w-[1550px] mx-auto">
        <div
          ref={heroRef}
          className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-[#ECE4D9]"
        >
          <h1 className="text-[48px] md:text-[68px] font-extrabold leading-tight">
            We Build Websites, Apps And <br />
            Strategies to Grow Your Business.
          </h1>
          <p className="mt-4 text-[18px] md:text-[20px] max-w-4xl">
            NexaVista Technologies is your partner in turning complex ideas into intuitive digital solutions
            that resonate with your audience.
          </p>

          {/* CTA Button */}
          <button className="mt-6 bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] px-6 py-3 rounded-lg text-[16px] font-medium transition-all transform hover:scale-105">
            Get In Touch →
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="absolute bottom-0 left-0 right-0 bg-[#1A1816] py-6">
        <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#ECE4D9]">
          {[
            { icon: FaRegCalendarAlt, value: experience, label: "Years Of Experience" },
            { icon: FaTasks, value: projects, label: "Projects Completed" },
            { icon: FaUsers, value: developers, label: "Skilled Developers" },
            { icon: FaSmile, value: clients, label: "Satisfied Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group flex items-center p-6 rounded-lg transition-all duration-300 cursor-pointer"
            >
              <div className="p-4 rounded-full transition-all duration-300 group-hover:bg-[#6B6159]">
                <stat.icon className="text-[#6B6159] group-hover:text-[#ECE4D9] transition-all duration-300" size={52} />
              </div>
              <div className="ml-4 text-left">
                <span className="text-[42px] md:text-[54px] font-black transition-all duration-300">
                  {stat.value}+
                </span>
                <p className="text-[16px] md:text-[18px] font-normal transition-all duration-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
