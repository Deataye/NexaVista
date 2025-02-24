"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaBullhorn, FaChartLine, FaEnvelopeOpenText, FaUsers } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalServices = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const serviceRefs = useRef([]);

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
      title: "Social Media Marketing",
      description:
        "Boost brand engagement with strategic social media campaigns designed to connect with your audience and drive traffic.",
      icon: <FaUsers className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#ECE4D9] group-hover:scale-110" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "SEO & Content Marketing",
      description:
        "Improve search rankings and attract organic traffic with optimized content, keyword strategies, and high-quality backlinks.",
      icon: <FaChartLine className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#ECE4D9] group-hover:scale-110" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Email Marketing",
      description:
        "Engage and convert leads with targeted email campaigns that nurture relationships and increase customer retention.",
      icon: <FaEnvelopeOpenText className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#ECE4D9] group-hover:scale-110" />,
      bgColor: "bg-[#6B6159]",
    },
    {
      title: "Paid Advertising",
      description:
        "Maximize ROI with data-driven ad campaigns on Google, Facebook, and more, designed to increase visibility and conversions.",
      icon: <FaBullhorn className="text-[#ECE4D9] text-3xl transition-all duration-300 group-hover:text-[#ECE4D9] group-hover:scale-110" />,
      bgColor: "bg-[#6B6159]",
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Content */}
        <div ref={textRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-[42px] font-bold leading-[50px]">
            Take Your Brand to the Next Level with <span className="text-[#6B6159]">Strategic Digital Marketing</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                className="p-6 rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#ECE4D9]"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${service.bgColor} transition-all duration-300 group-hover:bg-[#3F3A34]`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#ECE4D9] group-hover:text-[#3F3A34] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-center text-[#ECE4D9] group-hover:text-[#3F3A34] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div ref={imageRef} className="lg:w-1/2 flex justify-center">
          <Image
            src="/MarketingWhy.jpg"
            alt="Digital Marketing Strategy"
            width={600}
            height={900}
            className="rounded-lg shadow-lg object-cover h-[750px] transition-transform duration-500 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default DigitalServices;
