"use client";
import { useEffect, useRef } from "react";
import { FaSearch, FaPalette, FaCode, FaBug, FaRocket, FaWrench } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevAgile = () => {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    stepRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, []);

  const steps = [
    { title: "Discovery & Planning", description: "Understanding your goals and creating a roadmap.", icon: <FaSearch /> },
    { title: "Design", description: "Crafting visually appealing user-centric designs.", icon: <FaPalette /> },
    { title: "Development", description: "Bringing designs to life with scalable code.", icon: <FaCode /> },
    { title: "Testing", description: "Ensuring performance, security, and bug-free experience.", icon: <FaBug /> },
    { title: "Deployment", description: "Launching your web app smoothly.", icon: <FaRocket /> },
    { title: "Maintenance", description: "Ongoing support for seamless performance.", icon: <FaWrench /> },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#1A1816] text-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] leading-[55px] font-bold mb-4">How We Develop Web Apps Using Agile</h2>
        <p className="text-[16px] leading-[24px] mb-10">
          Our streamlined development process ensures your vision becomes a fully functional web application:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="bg-[#ECE4D9] p-10 rounded-lg shadow-md transition-all duration-300 hover:bg-[#3F3A34] group"
            >
              <div className="flex justify-center mb-4 text-[#6B6159] group-hover:text-[#ECE4D9] transition-colors duration-300 text-4xl">
                {step.icon}
              </div>
              <h3 className="text-xl text-[#1A1816] font-semibold group-hover:text-[#ECE4D9] transition-colors duration-300 mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B6159] group-hover:text-[#ECE4D9] transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevAgile;
