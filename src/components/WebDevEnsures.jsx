"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowsAlt, FaCalendarAlt, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevEnsures = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const featureRefs = useRef([]);

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

    featureRefs.current.forEach((el, index) => {
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

  const features = [
    { title: "Scalability", description: "Easily adapt to growth and user demands.", icon: <FaArrowsAlt className="text-[35px] transition-colors duration-300" /> },
    { title: "Future-Ready", description: "Stay ahead with long-term digital planning.", icon: <FaCalendarAlt className="text-[35px] transition-colors duration-300" /> },
    { title: "Expert Team", description: "Leverage our 1,000+ skilled developers.", icon: <FaUsers className="text-[35px] transition-colors duration-300" /> },
    { title: "Top Security", description: "Robust protection for your digital assets.", icon: <FaShieldAlt className="text-[35px] transition-colors duration-300" /> },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div ref={imageRef} className="relative w-full lg:w-1/2">
          <Image
            src="/request-a-call-back-im1.jpg"
            alt="Web Development Company"
            width={500}
            height={500}
            className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side - Content */}
        <div ref={textRef} className="w-full lg:w-1/2">
          <h2 className="text-[46px] font-black leading-[55px] pb-10">
            <span className="text-[#6B6159]">NexaVista Technologies</span> Ensures
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="flex items-start gap-4 p-4 transition-all duration-300 bg-[#ECE4D9] hover:bg-[#3F3A34] group rounded-lg"
              >
                <div className="group-hover:text-[#ECE4D9] text-[#6B6159] transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B6159] text-[16px] group-hover:text-[#ECE4D9] transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-[#3F3A34] hover:bg-[#6B6159] text-[#ECE4D9] hover:text-[#1A1816] px-6 py-3 rounded-lg text-lg font-medium transition-all"
          >
            Work with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevEnsures;
