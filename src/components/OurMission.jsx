"use client";

import { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function OurMission() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Text animation (slide in from left)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

    // Image animation (fade-in + slight zoom)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={`bg-[#ECE4D9] text-[#3F3A34] py-20 ${poppins.className}`}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div
          ref={textRef}
          className="lg:w-1/2 transition-transform duration-300 transform hover:scale-105"
        >
          <h2 className="text-[46px] leading-[55px] font-black mb-4">Our Mission</h2>
          <p className="text-[#6B6159] text-[18px] leading-[29px]">
            At NexaVista Technologies, our mission is simple: to help our clients succeed in the digital world.
            We aim to deliver tailored solutions that not only meet but exceed our clients’ expectations. 
            By combining our technical expertise with a deep understanding of our clients’ needs, 
            we create digital experiences that are not only functional but also impactful.
          </p>
        </div>

        {/* Right Side - Image */}
        <div ref={imageRef} className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-110">
            <Image
              src="/TailoredSolutions.jpg"
              alt="Our Mission"
              width={1000}
              height={1000}
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
