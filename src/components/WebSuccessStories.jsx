"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebSuccessStories = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const pointRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );

    pointRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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

  const points = [
    "Agile Web Design & Development Methodology",
    "Award Winning Web Solutions & Sites",
    "Competitive Rates for Web Design and Development Talent",
    "Agile Web Design and Development Methodology",
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] text-center ${poppins.className}`}>
      <h2 className="text-[46px] leading-[55px] font-bold mb-6">
        View Our <span className="text-[#6B6159]">Success Stories</span> of Web Application
      </h2>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Side Content */}
        <div
          ref={contentRef}
          className="lg:w-1/2 bg-[#6B6159] text-[#ECE4D9] p-[39px] rounded-l-lg lg:rounded-l-lg lg:rounded-r-none shadow-lg transition-all duration-300 hover:bg-[#3F3A34] flex flex-col justify-center h-full"
        >
          <h3 className="text-3xl font-bold mb-6 leading-tight transition-all duration-300 hover:text-[#ECE4D9]">
            Why Do Medium & Large Businesses Choose Custom Apps More Often?
          </h3>
          <ul className="space-y-4 text-left">
            {points.map((point, index) => (
              <li
                key={index}
                ref={(el) => (pointRefs.current[index] = el)}
                className="flex items-center gap-3 text-lg transition-all duration-300 hover:text-[#ECE4D9]"
              >
                <FaCheckCircle className="text-[#ECE4D9] transition-all duration-300 group-hover:text-[#F4A261]" /> {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image - Adjusted for Equal Height */}
        <div ref={imageRef} className="lg:w-1/2 flex h-full">
          <Image
            src="/Expertise_WebDev.jpg"
            alt="Success Stories"
            width={600}
            height={500}
            className="rounded-r-lg lg:rounded-r-lg lg:rounded-l-none shadow-lg transition-transform duration-500 hover:scale-105 object-cover h-[402px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WebSuccessStories;
