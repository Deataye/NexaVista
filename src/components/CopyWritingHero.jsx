"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const CopyWritingHero = () => {
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
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: imageRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen bg-[#514C4A] flex items-center justify-center text-center ${poppins.className}`}
    >
      <div className="container flex flex-col lg:flex-row items-center justify-center px-6 lg:px-0 gap-10">
        
        {/* Left Side Content */}
        <div ref={textRef} className="flex flex-col pt-14 text-left text-[#ECE4D9] max-w-2xl">
          <h1 className="text-[48px] lg:text-[60px] font-extrabold leading-[68px]">
            Words That Sell, Stories That <span className="text-[#6B6159]">Convert</span>
          </h1>
          <p className="mt-6 text-[20px] leading-[32px]">
            The right words can turn readers into buyers. At NexaVista, we craft persuasive, 
            conversion-focused copy that captivates, engages, and drives action. From high-converting sales pages 
            to compelling email sequences, we make every word count.
          </p>
          <Link href="/contact">
            <button className="mt-10 bg-[#ECE4D9] hover:bg-[#CFC7BD] text-[#3F3A34] px-8 py-4 rounded-md text-[18px] font-medium transition-all">
              Get High-Converting Copy
            </button>
          </Link>
        </div>

        {/* Right Side Image - Overlapping Images */}
        <div ref={imageRef} className="relative w-[1200px] flex border-[10px] rounded-sm border-[#514C4A] justify-center">
          {/* Large Image */}
          <Image
            src="/copy3.jpg"
            alt="Copywriting in Action"
            width={1000}
            height={1200}
            className="object-cover rounded-sm shadow-2xl transition-transform duration-500 hover:scale-105"
          />

          {/* Small Overlapping Image */}
          <div className="absolute bottom-0 left-0 border-[10px] shadow-2xl rounded-sm border-[#514C4A]">
            <Image
              src="/copy7.jpg"
              alt="Persuasive Copywriting"
              width={200}
              height={300}
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CopyWritingHero;
