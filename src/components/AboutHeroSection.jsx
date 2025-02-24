"use client";
import { useEffect, useState, useRef } from "react";
import { FaRegCalendarAlt, FaTasks, FaUsers, FaSmile } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const AboutHeroSection = () => {
  // Counter Animation
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [developers, setDevelopers] = useState(0);
  const [clients, setClients] = useState(0);

  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in Left Animation for Text Content
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power2.out", scrollTrigger: sectionRef.current }
    );

    // Slide-Up Animation for Stats Section
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: statsRef.current }
    );

    // Counter Animation
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
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/Aboutherosection.jpg')" }}></div>

      {/* Content */}
      <div className="justify-center h-full max-w-[1550px] mx-auto">
        <div ref={sectionRef} className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-[#ECE4D9]">
          <h1 className="text-[42px] md:text-[60px] font-extrabold leading-tight">
            Our Journey, Mission<br />
            at NexaVista Technologies
          </h1>
          <p className="mt-4 text-[16px] md:text-[20px] max-w-4xl leading-[28px]">
            NexaVista Technologies empowers businesses with innovative digital solutions. Our passionate team combines expertise and creativity to harness technology for meaningful growth and transformation.
          </p>

          {/* CTA Button with Hover Effects */}
          <button className="mt-6 bg-[#3F3A34] hover:bg-[#ECE4D9] text-[#ECE4D9] hover:text-[#3F3A34] px-6 py-3 rounded-lg text-[16px] font-medium transition-all duration-300 ease-in-out">
            Get In Touch →
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="absolute bottom-0 left-0 right-0 bg-[#1A1816] py-6">
        <div className="container mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#ECE4D9]">
          {/* Counter Boxes with Group Hover & Animation */}
          {[
            { icon: FaRegCalendarAlt, value: experience, label: "Years Of Experience" },
            { icon: FaTasks, value: projects, label: "Projects Completed" },
            { icon: FaUsers, value: developers, label: "Skilled Developers" },
            { icon: FaSmile, value: clients, label: "Satisfied Clients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <stat.icon className="text-[#6B6159] group-hover:text-[#ECE4D9] mb-3 transition-colors duration-300" size={52} />
              <span className="text-[48px] text-[#ECE4D9] font-black transition-colors duration-300">{stat.value}+</span>
              <p className="text-[#6B6159] group-hover:text-[#ECE4D9] text-[16px] font-medium transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
