"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaFileAlt, FaBullseye, FaEnvelopeOpenText } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const CopySolutions = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: imageRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: textRef.current, start: "top 85%" },
      }
    );

    serviceRefs.current.forEach((el, index) => {
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

  const services = [
    {
      title: "Persuasive Sales Copy",
      description:
        "Crafting compelling sales pages and website content that captivate, persuade, and drive conversions effectively.",
      icon: <FaBullseye className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:text-[#3F3A34]" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Landing Pages & Ad Copy",
      description:
        "Strategically written landing pages and ad copies designed to attract, engage, and convert your audience seamlessly.",
      icon: <FaFileAlt className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:text-[#3F3A34]" />,
      bgColor: "bg-[#3F3A34]",
    },
    {
      title: "Email Sequences & Content",
      description:
        "Engaging email sequences that nurture leads, boost sales, and create meaningful customer relationships.",
      icon: <FaEnvelopeOpenText className="text-[#ECE4D9] text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:text-[#3F3A34]" />,
      bgColor: "bg-[#1A1816]",
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <div ref={imageRef} className="lg:w-1/2 flex justify-center">
          <Image
            src="/copy8.jpg" 
            alt="Copywriting Workspace"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover h-[500px] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side - Content */}
        <div ref={textRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            <span className="text-[#6B6159]">Copywriting Solutions</span> for Maximum Conversions
          </h2>
          <p className="text-[#ECE4D9] text-[16px] leading-[29px]">
            Words have power. Our copywriting services help businesses captivate audiences, build trust, and drive action.
          </p>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                className="flex items-start gap-4 p-4 transition-all duration-300 bg-[#ECE4D9] hover:bg-[#3F3A34] group rounded-lg"
              >
                <div className={`p-3 rounded-full ${service.bgColor} transition-all duration-300 group-hover:bg-[#ECE4D9]`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3F3A34] group-hover:text-[#ECE4D9] transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#6B6159] text-[16px] leading-[29px] group-hover:text-[#ECE4D9] transition-all duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CopySolutions;
