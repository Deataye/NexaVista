"use client";
import { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import { Users, Globe2, Accessibility, Lightbulb } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function WhatSetsUsApart() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in Heading & Subheading
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", scrollTrigger: sectionRef.current }
    );

    // Staggered Fade-in for Cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={`bg-[#ECE4D9] text-[#3F3A34] py-20 ${poppins.className}`}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-[36px] md:text-[46px] leading-[44px] md:leading-[55px] font-black mb-4">
          What Sets Us Apart
        </h2>

        {/* Subheading / Intro */}
        <p className="text-center max-w-2xl mx-auto text-[#6B6159] text-[16px] md:text-[18px] leading-[26px] md:leading-[29px] mb-12">
          We’re dedicated to pushing boundaries and driving innovation. Here’s what makes us unique.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "Community-Centric Approach", desc: "At NexaVista, we’re more than just a company – we’re a community. We prioritize strong connections with users, partners, and our team." },
            { icon: Globe2, title: "Tech Diversity", desc: "Our team is as diverse as the technology we create. We bring together a range of skills and perspectives, from developers to designers." },
            { icon: Accessibility, title: "Accessible Technology", desc: "We believe technology should be accessible to all. Our commitment to inclusivity empowers individuals and businesses." },
            { icon: Lightbulb, title: "Innovative Solutions", desc: "We push the boundaries of what’s possible. Our team of experts is dedicated to creating groundbreaking solutions." },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-[#3F3A34] p-6 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#ECE4D9] hover:text-[#3F3A34] shadow-md hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#ECE4D9] group-hover:bg-[#3F3A34] transition-all duration-300">
                <item.icon size={36} className="text-[#3F3A34] group-hover:text-[#ECE4D9] transition-colors duration-300" />
              </div>
              <h3 className="text-[20px] md:text-[22px] leading-[26px] font-extrabold mb-2 text-[#ECE4D9] group-hover:text-[#3F3A34] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#ECE4D9] group-hover:text-[#3F3A34] text-[15px] md:text-[16px] leading-[26px] transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
