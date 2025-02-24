"use client";

import { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function JoinUs() {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-[#ECE4D9] text-[#3F3A34] py-20 text-center ${poppins.className}`}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[36px] md:text-[46px] leading-[55px] font-black mb-4">
          Join Us on Our Journey
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-[#6B6159] text-[18px] leading-[29px] mb-8">
          At NexaVista Technologies, we believe that the best is yet to come. We are excited 
          about the future and the opportunities it holds for our clients and our team. 
          We invite you to join us on this journey and discover how we can help your business 
          thrive in the digital age.
        </p>

        {/* Contact Button with Hover Effect */}
        <Link
          ref={buttonRef}
          href="/contact"
          className="inline-block bg-[#3F3A34] hover:bg-[#2F2A24] text-[#ECE4D9] hover:text-[#E9C46A] 
                     px-6 py-3 rounded-lg text-[16px] font-medium transition-all transform hover:scale-105"
        >
          Contact Us →
        </Link>
      </div>
    </section>
  );
}
