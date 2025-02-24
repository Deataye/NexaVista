"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const WebDevHero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Text Animation (Fade-in from left)
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

    // Image Animation (Fade-in from right)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className={`relative w-full h-screen flex bg-[#514C4A] items-center justify-center text-center ${poppins.className}`}>
      <div className="container flex flex-col lg:flex-row items-center justify-center px-6 lg:px-0 gap-10">
        
        {/* Left Side Content */}
        <div ref={textRef} className="flex flex-col pt-14 text-left text-[#ECE4D9] max-w-2xl">
          <h1 className="text-[48px] lg:text-[60px] font-extrabold leading-[68px]">
            Web App Development <br /> Services
          </h1>
          <p className="mt-6 text-[20px] leading-[32px]">
            Welcome to NexaVista Technologies, where innovation meets expertise in crafting unparalleled web solutions. 
            Elevate your online presence and user experience with our top-notch web development services.
          </p>
          <Link href="/contact">
            <button className="mt-10 bg-[#ECE4D9] text-[#3F3A34] px-8 py-4 rounded-md text-[18px] font-medium transition-all
              hover:bg-[#6B6159] hover:text-[#1A1816]">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Side Image - Overlapping Images */}
        <div ref={imageRef} className="relative w-[1200px] flex border-[10px] rounded-sm border-[#514C4A] justify-center">
          {/* Large Image with Zoom on Hover */}
          <Image 
            src="/2.jpg" 
            alt="Web App Development"
            width={1000}  
            height={1200} 
            className="object-cover rounded-sm shadow-2xl transition-transform duration-300 hover:scale-105"
          />

          {/* Small Overlapping Image with Zoom on Hover */}
          <div className="absolute bottom-0 left-0 border-[10px] shadow-2xl rounded-sm border-[#514C4A] transition-transform duration-300 hover:scale-110">
            <Image 
              src="/3.jpeg"
              alt="Team Discussion"
              width={350}  
              height={350}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDevHero;
