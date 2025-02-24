"use client";
import { useEffect, useRef } from "react";
import { FaSearch, FaPalette, FaCode, FaBug, FaRocket, FaWrench, FaMobileAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppAgile = () => {
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
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "Understanding your business objectives, target audience, and app requirements to define a clear roadmap for development.",
      icon: <FaSearch className="text-[#6B6159] text-[35px] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating visually stunning and user-friendly mobile interfaces that enhance engagement and provide seamless experiences.",
      icon: <FaPalette className="text-[#6B6159] text-[35px] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "App Development",
      description:
        "Transforming designs into high-performance mobile applications using Swift, Flutter, or React Native for native or cross-platform solutions.",
      icon: <FaMobileAlt className="text-[#6B6159] text-[35px] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Performing rigorous testing to ensure smooth performance, security, and a bug-free user experience across all devices.",
      icon: <FaBug className="text-[#6B6159] text-[35px] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "App Deployment",
      description:
        "Launching your mobile app seamlessly on the App Store and Google Play, ensuring compliance with platform guidelines.",
      icon: <FaRocket className="text-[#6B6159] text-[35px] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "Providing continuous updates, monitoring, and improvements to keep your app optimized and up-to-date with the latest technologies.",
      icon: <FaWrench className="text-[#6B6159] text-[35px] group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#1A1816] text-[#ECE4D9] text-center ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[46px] leading-[55px] font-bold mb-4">
          How We Develop <span className="text-[#6B6159]">Mobile Apps</span> Using Agile
        </h2>
        <p className="text-[16px] leading-[24px] mb-10">
          Our agile mobile app development process ensures flexibility, efficiency, and high-quality results, 
          transforming your vision into a powerful mobile application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="bg-[#ECE4D9] p-10 rounded-lg shadow-md transition-all duration-300 hover:bg-[#3F3A34] group"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl text-[#1A1816] font-semibold mb-3 group-hover:text-[#ECE4D9] transition-colors duration-300">
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

export default MobileAppAgile;
