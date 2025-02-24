"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalProcess = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const stepRefs = useRef([]);

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
    {
      title: "Market Research & Strategy",
      description:
        "We analyze your industry, audience behavior, and competition to develop a data-driven digital marketing strategy for maximum impact.",
      icon: <FaSearch className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Campaign Execution & Engagement",
      description:
        "We implement targeted campaigns across multiple channels, ensuring optimized content, compelling ads, and strategic social engagement.",
      icon: <FaBullhorn className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Performance Tracking & Optimization",
      description:
        "We continuously monitor key metrics, analyze performance, and refine strategies to ensure sustained growth and maximum ROI.",
      icon: <FaChartLine className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
      bgColor: "bg-[#1A1816]",
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Content */}
        <div ref={textRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-[46px] font-black leading-[55px]">
            Our <span className="text-[#6B6159]">Digital Marketing</span> Process
          </h2>
          <p className="text-[#6B6159] text-[16px] leading-[29px]">
            Our data-driven approach ensures strategic execution, audience engagement, and continuous optimization 
            to maximize your digital presence.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="flex items-start gap-4 p-4 transition-all duration-300 bg-[#ECE4D9] hover:bg-[#3F3A34] group rounded-lg"
              >
                <div className={`p-3 rounded-full ${step.bgColor} transition-all duration-300 group-hover:bg-[#ECE4D9]`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#6B6159] text-[16px] group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image with Increased Height */}
        <div ref={imageRef} className="lg:w-1/2 flex justify-center">
          <Image
            src="/SocialMedia.jpg"
            alt="Digital Marketing Process"
            width={600}
            height={700}
            className="rounded-lg shadow-lg h-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalProcess;
