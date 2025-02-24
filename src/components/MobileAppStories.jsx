"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const MobileAppStories = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: textRef.current, start: "top 85%" },
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
        scrollTrigger: { trigger: imageRef.current, start: "top 85%" },
      }
    );
  }, []);

  const points = [
    "Agile Mobile App Development Process",
    "Award-Winning iOS & Android Applications",
    "Competitive Rates for Mobile Development Talent",
    "Seamless User Experience & Scalable Solutions",
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] text-center ${poppins.className}`}>
      <h2 className="text-[46px] leading-[55px] font-bold mb-6">
        View Our <span className="text-[#6B6159]">Success Stories</span> in Mobile App Development
      </h2>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-stretch">
        {/* Left Side Content */}
        <div
          ref={textRef}
          className="lg:w-1/2 bg-[#6B6159] text-[#ECE4D9] p-[39px] flex flex-col justify-center rounded-l-lg lg:rounded-l-lg lg:rounded-r-none shadow-lg transition-all duration-300 hover:bg-[#3F3A34]"
        >
          <h3 className="text-3xl font-bold mb-6 leading-tight">
            Why Do Medium & Large Businesses Choose Custom Mobile Apps?
          </h3>
          <ul className="space-y-4 text-left">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <FaCheckCircle className="text-[#ECE4D9]" /> {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div ref={imageRef} className="lg:w-1/2 flex">
          <Image
            src="/Expertise_AppDev.jpg"
            alt="Success Stories"
            width={600}
            height={500}
            className="rounded-r-lg lg:rounded-r-lg lg:rounded-l-none shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAppStories;
