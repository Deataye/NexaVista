"use client";

import { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const teamMembers = [
  {
    name: "Qandeel Khalid",
    role: "CMO",
    position: "Chief Marketing Officer",
    image: "/Qandeel Khalid.jpg",
  },
  {
    name: "Mirza Tayyab",
    role: "COO",
    position: "Chief Operations Officer",
    image: "/Mirza Tayyab.jpg",
  },
  {
    name: "Mirza Talha",
    role: "CEO & Co-Founder",
    position: "Chief Executive Officer",
    image: "/Mirza Talha.jpg",
  },
  {
    name: "Aniqa Noor",
    role: "CCO",
    position: "Chief Content Officer",
    image: "/Aniqa Noor.jpg",
  },
  {
    name: "Uzair Shabbir",
    role: "CTO",
    position: "Chief Technology Officer",
    image: "/Uzair Shabbir.jpg",
  },
];

export default function MeetOurTeam() {
  const sectionRef = useRef(null);
  const teamRef = useRef([]);

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

    teamRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-[#1A1816] text-[#ECE4D9] ${poppins.className}`}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-[46px] leading-[55px] font-black mb-4">
          Meet Our Team
        </h2>

        {/* Subheading / Intro */}
        <p className="max-w-2xl mx-auto text-center text-[#B0A89F] text-[18px] leading-[29px] mb-12">
          Our team consists of talented professionals with diverse backgrounds and a shared 
          commitment to excellence. We bring together designers, developers, marketers, and 
          strategists to deliver outstanding results for our clients.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (teamRef.current[index] = el)}
              className="text-center bg-[#3F3A34] p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#ECE4D9] group"
            >
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover rounded-full border-4 border-[#ECE4D9] group-hover:border-[#3F3A34] transition-all"
                />
              </div>
              <h3 className="text-[22px] leading-[26px] font-extrabold group-hover:text-[#3F3A34] transition-all">
                {member.name}
              </h3>
              <p className="text-[#B0A89F] text-[16px] leading-[24px] group-hover:text-[#3F3A34] transition-all">
                {member.role}
              </p>
              <p className="text-[#ECE4D9] text-[14px] leading-[22px] group-hover:text-[#3F3A34] transition-all">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
