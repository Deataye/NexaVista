"use client";
import { useEffect, useRef } from "react";
import { FaBullhorn, FaChartLine, FaEnvelopeOpenText } from "react-icons/fa";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const DigitalMethods = () => {
  const sectionRef = useRef(null);
  const methodRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      }
    );

    methodRefs.current.forEach((el, index) => {
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

  const methods = [
    {
      title: "Social Media Marketing",
      description: [
        "Content Strategy & Creation",
        "Platform-Specific Campaigns",
        "Audience Engagement & Growth",
        "Paid Ad Management",
      ],
      icon: <FaBullhorn className="text-[#ECE4D9] text-4xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
    },
    {
      title: "SEO & Content Marketing",
      description: [
        "Keyword Research & Strategy",
        "On-Page & Off-Page Optimization",
        "High-Quality Blog Content",
        "Backlink Building & Authority Growth",
      ],
      icon: <FaChartLine className="text-[#ECE4D9] text-4xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
    },
    {
      title: "Email Marketing",
      description: [
        "Targeted Email Campaigns",
        "Automated Lead Nurturing",
        "Persuasive Subject Lines",
        "Measurable Engagement & Conversions",
      ],
      icon: <FaEnvelopeOpenText className="text-[#ECE4D9] text-4xl transition-all duration-300 group-hover:text-[#3F3A34] group-hover:scale-110" />,
    },
  ];

  return (
    <section ref={sectionRef} className={`py-16 bg-[#ECE4D9] text-[#3F3A34] ${poppins.className}`}>
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-[46px] leading-[55px] font-black mb-4">
          Our <span className="text-[#6B6159]">Digital Marketing</span> Approach for Maximum Growth
        </h2>
        <p className="text-[#6B6159] mb-10">
          At <span className="text-[#3F3A34] font-semibold">NexaVista Technologies</span>, we implement data-driven strategies that
          increase brand visibility, engagement, and conversions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              ref={(el) => (methodRefs.current[index] = el)}
              className="p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#3F3A34] group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-[#6B6159] transition-all duration-300 group-hover:bg-[#ECE4D9]">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#3F3A34] group-hover:text-[#ECE4D9] transition-all duration-300">
                {method.title}
              </h3>
              <ul className="text-[#6B6159] space-y-2 text-left group-hover:text-[#ECE4D9] transition-all duration-300">
                {method.description.map((desc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaEnvelopeOpenText className="text-[#ECE4D9] transition-all duration-300 group-hover:text-[#3F3A34]" /> {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMethods;
